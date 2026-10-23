# goCam Helm chart

This chart deploys the repository's Docker image with a ClusterIP Service,
optional HTTPS Ingress, and a `helm test` health probe. It requires Helm 3.17+
and Kubernetes 1.25+. The chart defaults to the tested AMD64/ARM64 image published
by this repository at `ghcr.io/yiidiir/gocamopensource-helm`, pinned to a full
commit tag. No application image build is required to install it. The
[Docker guide](../docs/docker.md#published-images) describes publishing and updates.

## Install

Add the published chart repository:

```sh
helm repo add gocam https://yiidiir.github.io/goCamOpenSource-helm
helm repo update
```

Create the namespace and provision a Secret there using your secret manager or
an environment file containing only `ENCRYPTION_KEY` and `SESSION_SECRET`:

```sh
kubectl create namespace verification
kubectl -n verification create secret generic gocam-secrets \
  --from-env-file=/secure/path/gocam-secrets.env
```

Generate the encryption key with `openssl rand -hex 16` (32 ASCII bytes for
AES-256-CBC) and a separate session secret with `openssl rand -hex 32`. Configure
the same encryption key in your integrating application. Keep the environment
file private. Secret values are never passed through Helm values or generated
by this chart. Custom Secret field names are supported by `secret.*Key`.

Copy `helm/values-production.example.yaml` to a file outside the chart and edit
the public hostname, ingress class, proxy trust, and TLS Secret name:

```sh
helm upgrade --install gocam gocam/gocam --version 0.1.1 \
  --namespace verification \
  -f /path/to/values-production.yaml \
  --wait --timeout 5m
helm test gocam --namespace verification --logs
```

Use `./helm` instead of `gocam/gocam` (and omit `--version`) to install directly
from this checkout.

The ingress controller and DNS must already be configured. Provide a TLS Secret
in the release namespace, or use controller/cert-manager annotations to provision
the named certificate. The chart does not install a controller or certificate
manager. Ingress uses `config.host` for both routing and TLS, and serves the
application at `/`; path-prefix rewriting is unsupported by the application.

The backend always uses plain HTTP. `config.protocol: https` enables secure
session cookies. The proxy must overwrite `X-Forwarded-Proto`/`X-Forwarded-For`
and preserve `Host`. Set `config.trustProxy: "1"` only with exactly one trusted
proxy; otherwise configure the correct hop count or proxy IP/subnet list. Restrict
direct pod/Service access to trusted callers using your cluster's NetworkPolicy
or equivalent controls. If TLS terminates upstream of the ingress controller,
you can disable `ingress.tls.enabled` while keeping `config.protocol: https`,
provided trusted forwarding headers correctly describe the external HTTPS URL.

## Application limits and upgrades

The chart requires `replicaCount: 1`, uses a `Recreate` Deployment strategy, and
does not provide autoscaling. Rolling updates would send requests to independent
in-memory session stores. Upgrades have downtime, and pod replacement loses
active verification sessions and used-payload state. Express MemoryStore and
the application stores still require replacement for sustained production use;
the chart does not add durability or fix their unbounded growth.

The container runs as UID/GID 1000 with a read-only root filesystem, dropped
capabilities, and no service-account token. Writable `/tmp` and `/app/log` use
size-limited memory-backed `emptyDir` volumes with `fsGroup: 1000`. These consume
pod memory and disappear when the pod is removed; callback logs are only for the
example endpoint. The 30-second termination grace period allows the application's
25-second HTTP shutdown timeout. Startup, readiness, and liveness probes use
`/healthz`. They check HTTP availability, not camera verification or callbacks.

Use a new immutable image tag or `image.digest` for every release. Changing
application values changes the pod template and triggers replacement. Changing
the contents of an external Secret does not automatically restart the pod; after
rotating it, run `kubectl rollout restart deployment/gocam -n verification`
(substitute your release's Deployment name if different). All such restarts lose
in-memory state. `helm rollback gocam REVISION -n verification --wait` restores a
previous release's manifests, not its sessions or externally managed secrets.

## Values

| Value | Default | Purpose |
| --- | --- | --- |
| `image.repository`, `image.tag` | `ghcr.io/yiidiir/gocamopensource-helm`, pinned `sha-...` tag | Tested multi-platform image published by this repository. |
| `image.digest` | empty | Optional `sha256:...`; takes precedence over the tag. |
| `image.pullPolicy` | `IfNotPresent` | Use immutable tags/digests; `Never` is useful for preloaded local images. |
| `imagePullSecrets` | `[]` | List of `{name: registry-secret}` references. |
| `secret.existingSecret` | `gocam-secrets` | Required existing Secret in the release namespace. |
| `secret.encryptionKeyKey` | `ENCRYPTION_KEY` | Field containing the raw AES key. |
| `secret.sessionSecretKey` | `SESSION_SECRET` | Field containing the session signing secret. |
| `config.host` | `localhost` | Public hostname; required for ingress. |
| `config.port` | `3300` | Container HTTP port; probes and Service follow it. |
| `config.protocol` | `https` | External scheme; use `http` only for localhost tests. |
| `config.trustProxy` | `"0"` | Proxy trust disabled until configured. Must be a string. |
| `config.encryptionAlgorithm` | `aes-256-cbc` | Must match the integration and key length. |
| `config.enableFrontendDebug` | `false` | Enables frontend debugging when true. |
| `service.port` | `80` | ClusterIP Service port. |
| `ingress.enabled` | `false` | Creates an Ingress for `config.host` at `/`. |
| `ingress.className`, `ingress.annotations` | empty, `{}` | Controller selection and configuration. |
| `ingress.tls.enabled`, `ingress.tls.secretName` | `true`, empty | Certificate configuration when ingress is enabled. |
| `resources` | requests `100m`/`128Mi`, limits `1`/`512Mi` | Tune CPU and memory to workload. |
| `podAnnotations`, `service.annotations` | `{}` | Custom metadata. |
| `nodeSelector`, `affinity`, `tolerations` | empty | Pod scheduling configuration. |
| `nameOverride`, `fullnameOverride` | empty | Override chart/resource names. |
| `tests.enabled` | `true` | Include the `helm test` hook Pod. |

For a local cluster with the image already loaded, disable ingress and set
`config.protocol=http`, `config.host=localhost`, `config.trustProxy="0"`, and
`image.repository=gocam`, `image.tag=production`, and `image.pullPolicy=Never`. After installing, run
`kubectl -n verification port-forward service/gocam 3300:80` and open
`http://localhost:3300`. The Secret is still required.

## Validate and package

These checks run locally without contacting a Kubernetes cluster:

```sh
helm lint --strict helm
helm lint --strict helm -f helm/values-production.example.yaml
python3 -m pip install PyYAML
python3 script/helm-test.py
helm template gocam helm -f helm/values-production.example.yaml
helm package helm --destination /tmp
```

The render tests cover selectors, ports, secret references, ingress/TLS,
image digests, pod security, and invalid values. `helm test` runs only when
explicitly invoked after installation, checks the Service's `/healthz` using the
same application image, and needs no application secrets or additional image.
The Helm GitHub Actions workflow lints, runs the render tests, and packages the
chart for pull requests without cluster credentials.

## Publish chart releases

On `main`, the Helm workflow publishes when the repository Actions variable
`HELM_PUBLISH_ENABLED` is set to `true`. After the lint/render job passes,
chart-releaser creates a GitHub release such as `gocam-0.1.0`, uploads the packaged
chart, and updates `index.yaml` on the `gh-pages` branch. The workflow then deploys
that index to GitHub Pages using the built-in `GITHUB_TOKEN`; no personal token
or registry password is needed in CI. Pull requests never publish.

The repository URL is `https://yiidiir.github.io/goCamOpenSource-helm`. Packages
are served from GitHub release assets and referenced by the Pages index. Previous
chart versions remain available. Increment `version` in `helm/Chart.yaml` for
each chart release; an existing version is skipped rather than overwritten.
Update `appVersion` when the packaged application version changes. Rerun the
Helm workflow on `main` using `workflow_dispatch` to retry a failed publication.

For a fork, first create an empty `gh-pages` branch, enable Pages with **GitHub
Actions** as its source in repository settings, and set `HELM_PUBLISH_ENABLED`
to `true`. The publishing job derives the release/index destination from the
current repository; update the documented repository URL for your fork. The
opt-in variable keeps publishing disabled for upstream repositories and forks
that have not configured Pages. The job needs `contents: write`, `pages: write`,
and `id-token: write`, scoped to publishing only. Publishing a chart does not
build/push its application image or deploy to a Kubernetes cluster.

## External API integration

Set `config.apiIntegration: true`, `secret.callbackSecretKey` to an existing
Secret field, and `config.callbackAllowedOrigins` to the HTTPS origins of the
consumer backend. `config.callbackAllowedHostSuffixes` can additionally allow
owned preview domains (e.g. `.preview.example.com`); suffix matches require HTTPS.
Set `config.callbackSecretHeader` to the HTTP header that the consumer validates.
The API rejects callbacks outside that allowlist, and delivery does not follow
redirects or log the webhook credential.

In this mode, `/getVerificationPayloadAndUrl` accepts a form
without `demoPageUrl`, uses the configured public hostname/protocol for browser
URLs, and returns a JSON string containing a positive 32-bit `sessionId` in
`content.payload`. The URL's `d` query still contains the encrypted verification
payload. The same ID is used in the webhook, with the configured secret header.
The ID is allocated before the browser opens so API consumers can persist it and
correlate the callback. The default mode continues to return the encrypted
payload for the standalone demo integration.

Verification links expire ten minutes after creation and cannot be opened twice.
The chart retains the most recent health-test Pod until the next `helm test`, so
`helm test --logs` can retrieve its output.
