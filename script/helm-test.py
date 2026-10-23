#!/usr/bin/env python3
"""Render and check the Helm chart without contacting a Kubernetes cluster.

Requires Helm 3.17+ and PyYAML (python3 -m pip install PyYAML).
"""
import json
from pathlib import Path
import subprocess
import tempfile
import unittest

import yaml

ROOT = Path(__file__).resolve().parent.parent


def render(values=None, expect_failure=False):
    with tempfile.TemporaryDirectory(prefix="gocam-helm-") as directory:
        values_file = Path(directory) / "values.json"
        values_file.write_text(json.dumps(values or {}))
        result = subprocess.run(
            ["helm", "template", "test", str(ROOT / "helm"), "--namespace", "verification",
             "--kube-version", "1.32.0", "-f", str(values_file)],
            text=True, capture_output=True, timeout=30,
        )
    if expect_failure:
        if result.returncode == 0:
            raise AssertionError("Invalid values unexpectedly rendered")
        return result.stderr
    if result.returncode:
        raise AssertionError(result.stderr)
    return {document["kind"]: document for document in yaml.safe_load_all(result.stdout) if document}


class HelmChartTest(unittest.TestCase):
    def test_default_deployment(self):
        manifests = render()
        self.assertEqual(set(manifests), {"Deployment", "Service", "Pod"})
        deployment = manifests["Deployment"]
        self.assertEqual(deployment["spec"]["replicas"], 1)
        self.assertEqual(deployment["spec"]["strategy"], {"type": "Recreate"})
        pod = deployment["spec"]["template"]
        service = manifests["Service"]
        self.assertEqual(service["spec"]["type"], "ClusterIP")
        self.assertEqual(service["spec"]["selector"], pod["metadata"]["labels"])
        # The hook Pod must not be adopted by the ReplicaSet or served by the Service.
        test_labels = manifests["Pod"]["metadata"]["labels"]
        self.assertFalse(all(test_labels.get(k) == v for k, v in service["spec"]["selector"].items()))
        self.assertFalse(pod["spec"]["automountServiceAccountToken"])
        self.assertEqual(pod["spec"]["terminationGracePeriodSeconds"], 30)
        self.assertEqual(pod["spec"]["securityContext"]["fsGroup"], 1000)
        container = pod["spec"]["containers"][0]
        security = container["securityContext"]
        self.assertTrue(security["runAsNonRoot"])
        self.assertTrue(security["readOnlyRootFilesystem"])
        self.assertFalse(security["allowPrivilegeEscalation"])
        self.assertEqual(security["capabilities"]["drop"], ["ALL"])
        self.assertEqual(security["seccompProfile"]["type"], "RuntimeDefault")
        for probe in ["startupProbe", "readinessProbe", "livenessProbe"]:
            self.assertEqual(container[probe]["httpGet"], {"path": "/healthz", "port": "http"})
        env = {entry["name"]: entry for entry in container["env"]}
        self.assertEqual(env["NODE_ENV"]["value"], "production")
        self.assertEqual(env["HTTP_BIND_ADDRESS"]["value"], "0.0.0.0")
        self.assertEqual(env["ENABLE_FRONTEND_DEBUG"]["value"], "false")
        for key in ["ENCRYPTION_KEY", "SESSION_SECRET"]:
            self.assertNotIn("value", env[key])
            self.assertEqual(env[key]["valueFrom"]["secretKeyRef"], {"name": "gocam-secrets", "key": key})
        self.assertEqual({v["name"] for v in pod["spec"]["volumes"]}, {"tmp", "callback-logs"})
        for volume in pod["spec"]["volumes"]:
            self.assertEqual(volume["emptyDir"], {"medium": "Memory", "sizeLimit": "16Mi"})

    def test_api_integration(self):
        manifests = render({
            "secret": {"callbackSecretKey": "CALLBACK_SECRET"},
            "config": {"apiIntegration": True,
                       "callbackSecretHeader": "x-consumer-webhook-secret",
                       "callbackAllowedOrigins": ["https://backend.example.com"],
                       "callbackAllowedHostSuffixes": [".preview.example.com"]},
        })
        container = manifests["Deployment"]["spec"]["template"]["spec"]["containers"][0]
        env = {entry["name"]: entry for entry in container["env"]}
        self.assertEqual(env["API_INTEGRATION"]["value"], "true")
        self.assertEqual(env["CALLBACK_SECRET_HEADER"]["value"], "x-consumer-webhook-secret")
        self.assertEqual(env["CALLBACK_ALLOWED_ORIGINS"]["value"], "https://backend.example.com")
        self.assertEqual(env["CALLBACK_WEBHOOK_SECRET"]["valueFrom"]["secretKeyRef"],
                         {"name": "gocam-secrets", "key": "CALLBACK_SECRET"})
        render({"config": {"apiIntegration": True}}, expect_failure=True)

    def test_production_ingress(self):
        values = yaml.safe_load((ROOT / "helm/values-production.example.yaml").read_text())
        manifests = render(values)
        ingress = manifests["Ingress"]
        self.assertEqual(ingress["apiVersion"], "networking.k8s.io/v1")
        self.assertEqual(ingress["spec"]["tls"], [{"hosts": ["verify.example.com"], "secretName": "gocam-tls"}])
        rule = ingress["spec"]["rules"][0]
        self.assertEqual(rule["host"], values["config"]["host"])
        path = rule["http"]["paths"][0]
        self.assertEqual(path["path"], "/")
        self.assertEqual(path["backend"]["service"]["name"], manifests["Service"]["metadata"]["name"])
        # TLS may terminate upstream of the ingress controller, without a TLS Secret here.
        values["ingress"]["tls"] = {"enabled": False}
        self.assertNotIn("tls", render(values)["Ingress"]["spec"])

    def test_overrides(self):
        digest = "sha256:" + "a" * 64
        manifests = render({
            "fullnameOverride": "custom-gocam",
            "image": {"repository": "registry.example.com/gocam", "tag": "", "digest": digest},
            "imagePullSecrets": [{"name": "registry-auth"}],
            "secret": {"existingSecret": "external-secret", "encryptionKeyKey": "aes", "sessionSecretKey": "session"},
            "config": {"port": 8080, "protocol": "http", "trustProxy": "0", "enableFrontendDebug": True},
            "service": {"port": 8081},
            "podAnnotations": {"example.com/revision": "2"},
            "nodeSelector": {"kubernetes.io/arch": "arm64"},
        })
        pod = manifests["Deployment"]["spec"]["template"]
        self.assertEqual(pod["metadata"]["annotations"]["example.com/revision"], "2")
        self.assertEqual(pod["spec"]["imagePullSecrets"], [{"name": "registry-auth"}])
        container = pod["spec"]["containers"][0]
        self.assertEqual(container["image"], "registry.example.com/gocam@" + digest)
        self.assertEqual(container["ports"][0]["containerPort"], 8080)
        env = {entry["name"]: entry for entry in container["env"]}
        self.assertEqual(env["HTTP_SERVER_PORT"]["value"], "8080")
        self.assertEqual(env["ENABLE_FRONTEND_DEBUG"]["value"], "true")
        self.assertEqual(env["ENCRYPTION_KEY"]["valueFrom"]["secretKeyRef"], {"name": "external-secret", "key": "aes"})
        self.assertEqual(env["SESSION_SECRET"]["valueFrom"]["secretKeyRef"]["key"], "session")
        self.assertEqual(manifests["Service"]["spec"]["ports"][0]["port"], 8081)
        health_container = manifests["Pod"]["spec"]["containers"][0]
        self.assertEqual(health_container["env"][0]["value"], "http://custom-gocam:8081/healthz")
        self.assertEqual(health_container["image"], container["image"])

    def test_disable_hook(self):
        self.assertNotIn("Pod", render({"tests": {"enabled": False}}))

    def test_reject_invalid_values(self):
        for values, error in [
            ({"replicaCount": 2}, "replicaCount"),
            ({"secret": {"existingSecret": ""}}, "existingSecret"),
            ({"config": {"port": 0}}, "port"),
            ({"config": {"port": "3300"}}, "port"),
            ({"config": {"protocol": "htps"}}, "protocol"),
            ({"config": {"trustProxy": 1}}, "trustProxy"),
            ({"image": {"tag": ""}}, "tag"),
            ({"image": {"digest": "invalid"}}, "digest"),
            ({"ingress": {"enabled": True}}, "config.host"),
            ({"ingress": {"enabled": True}, "config": {"host": "verify.example.com"}}, "config.trustProxy"),
            ({"ingress": {"enabled": True}, "config": {"host": "verify.example.com", "trustProxy": "1"}}, "ingress.tls.secretName"),
        ]:
            with self.subTest(values=values):
                self.assertIn(error, render(values, expect_failure=True))


if __name__ == "__main__":
    unittest.main()
