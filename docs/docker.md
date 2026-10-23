# Running with Docker

For Kubernetes deployments, use the [Helm chart](../helm/README.md).

The multi-stage image builds the backend, frontend JavaScript, and CSS from source
with `npm ci` on Node.js 24 LTS. The runtime contains production dependencies,
compiled code, templates, vendor libraries, and the face/OCR model assets. It runs
as the `node` user (UID/GID 1000), starts Node directly, and probes `/healthz` without
creating sessions. No host Node.js installation is needed to build or run it.

The runtime dependency lockfile has been refreshed, including Twig 3 to remove
vulnerable transitive dependencies. Native installations now require Node.js 22+.
`gulp-concat` is a build-only dependency and is excluded from the runtime image.
Express 4's `qs` dependency is overridden to `^6.16.0` for its denial-of-service
fixes; remove the override once Express's own dependency range includes that fix.

## Deployment limits

This packages the existing application; it does not replace its storage design.
Express sessions, verification sessions, and used payloads are held in process
memory. Run **one replica**. Restarting or replacing the container loses that state
and interrupts active verification flows. A Docker volume does not preserve it.
The existing stores can grow over time; Express explicitly advises against its
default [MemoryStore for production](https://expressjs.com/en/resources/middleware/session/).
For sustained production use, replace all three stores with a bounded, expiring
storage implementation; durable shared storage is also required before scaling
out or promising session continuity across deployments.

## Build and start

```sh
docker build --pull -t gocam:production .
cp .env.docker.example .env.docker
chmod 600 .env.docker
openssl rand -hex 16
openssl rand -hex 32
```

Put the first generated value in `ENCRYPTION_KEY`, the second in `SESSION_SECRET`,
and set `HTTP_SERVER_HOST` to your public hostname in `.env.docker`. Keep this file
private; it is excluded from Git and the Docker build context. Use the same
encryption key in your integrating application. The AES key is used as raw UTF-8
bytes: **32 ASCII characters**, not a 64-character hex encoding of 32 random bytes.
Production startup rejects absent/example keys, invalid key lengths, short session
secrets, and invalid ports. Generate separate random values for the two secrets.

```sh
docker compose --env-file .env.docker up -d --build --wait
docker compose --env-file .env.docker ps
curl --fail http://127.0.0.1:3300/healthz
docker compose --env-file .env.docker logs -f
```

Compose publishes only `127.0.0.1:3300` and expects an HTTPS reverse proxy on the
same host. It uses a read-only root filesystem, temporary writable directories,
no Linux capabilities, resource limits, rotated logs, and a 30-second stop grace
period. Adjust CPU/memory limits after measuring your workload. The example
`/callback` endpoint writes to the size-limited `/app/log` tmpfs; these example logs
are lost on restart. Real integrations should supply their own callback endpoint.
No persistent volume is needed by the current application.

For a localhost-only browser test, set `HTTP_SERVER_HOST=localhost`,
`HTTP_SERVER_PROTOCOL=http`, and `TRUST_PROXY=0` in `.env.docker` before starting.
Then open `http://localhost:3300`. Public deployments require HTTPS for camera
access and secure cookies.

## Reverse proxy and configuration

The Node process always serves plain HTTP. `HTTP_SERVER_PROTOCOL=https` describes
the external URL and enables `Secure; HttpOnly; SameSite=None` session cookies for
iframe integrations. It does not enable TLS inside the container. Your reverse
proxy must terminate TLS, forward `Host`, and overwrite `X-Forwarded-Proto` and
`X-Forwarded-For` with trusted values. With exactly one proxy, use `TRUST_PROXY=1`
and prevent clients from reaching the container directly. Alternatively supply
the proxy IPs/subnets using Express's comma-separated trust-proxy syntax. Browser
restrictions on third-party cookies may still affect cross-site iframe flows.

| Variable | Purpose/default |
| --- | --- |
| `NODE_ENV` | The image sets `production`; enables startup validation. |
| `HTTP_BIND_ADDRESS` | Image sets `0.0.0.0`; independent of the public hostname. Outside Docker, falls back to `HTTP_SERVER_HOST`. |
| `HTTP_SERVER_HOST` | Public hostname used in demo payloads; defaults to `localhost`. |
| `HTTP_SERVER_PORT` | Internal HTTP port; image and Compose use `3300`. |
| `HTTP_SERVER_PROTOCOL` | External `http` or `https`; Compose defaults to `https`. |
| `TRUST_PROXY` | Trusted proxy hop count or IP/subnet list; app default is disabled, Compose default is `1`. |
| `ENCRYPTION_KEY` | Required production AES key, 32 UTF-8 bytes for `aes-256-cbc`. |
| `ENCRYPTION_ALGORITHM` | Defaults to `aes-256-cbc`; must match your integration. |
| `SESSION_SECRET` | Required in production; independent random secret, at least 32 bytes. |
| `ENABLE_FRONTEND_DEBUG` | Only the literal `true` enables debugging; Compose sets `false`. |
| `GOCAM_IMAGE` | Compose image name; defaults to `gocam:production`. |
| `GOCAM_PORT` | Compose host port; defaults to `3300`. |

With a containerized reverse proxy, connect it to the same Docker network, forward
to `gocam:3300`, and remove the host port mapping. Configure `TRUST_PROXY` for that
network topology. Keep the app behind the proxy.

## Build for the production server

A normal build targets the builder's architecture. To build an AMD64 image from
an ARM64 workstation:

```sh
docker buildx build --platform linux/amd64 --pull --load -t gocam:production-amd64 .
```

To publish a multi-platform image to your own registry (replace the example name):

```sh
docker buildx build --platform linux/amd64,linux/arm64 --pull \
  -t registry.example.com/team/gocam:YOUR_RELEASE --push .
```

Set `GOCAM_IMAGE` to the published release in the server's environment file, then:

```sh
docker compose --env-file .env.docker pull
docker compose --env-file .env.docker up -d --no-build --wait
```

Keep the previous release tag for rollback, then repeat these commands with that
tag if needed. Each replacement interrupts in-memory verification sessions.
The base is pinned to the reviewed multi-platform Node 24.22.1 `bookworm-slim`
image. Update both the version and digest when adopting a newer Node security
release. Rebuild regularly and scan the resulting image and dependency lockfile
before release. `/healthz` checks the HTTP process only; it does not
exercise camera access, age estimation, external callbacks, or session durability.
Docker health status alone does not restart an unhealthy but running process.

## Validate changes

With Docker running and Node.js 22+ available on the host:

```sh
docker build -t gocam:production .
node script/docker-smoke-test.mjs
TEST_PLATFORM=linux/amd64 node script/docker-smoke-test.mjs gocam:production-amd64
```

The tests run with a read-only filesystem and dropped capabilities, check health,
render pages and encrypted payloads, verify compiled assets/models, check proxy
session cookies and secret validation, and confirm clean shutdown on SIGTERM.
They use temporary containers and generated test secrets. GitHub Actions runs the
same build and smoke tests on native AMD64 and ARM64 runners for pull requests.
Publishing runs only on `main`, as described below.

## Published images

The Docker workflow builds and smoke-tests native AMD64 and ARM64 images. On
`main`, each passing job pushes its tested image to GHCR with the repository's
`GITHUB_TOKEN`. After both jobs pass, the publishing job creates a multi-platform
image at `ghcr.io/yiidiir/gocamopensource-helm:sha-<full-commit-sha>` and updates
`latest`. Pull requests run the checks without publishing. No personal registry
credentials are needed in CI. The OCI source label links the image to this repo.

After the first publish, set the GHCR package's visibility to **Public** in the
repository owner's package settings so clusters can pull it anonymously. Until
then, the cluster needs a registry Secret whose token can read this package.
Use the full commit tag or manifest digest for deployments; `latest` is intended
for evaluation. When releasing a new default image in the Helm chart, update its
image tag/digest and increment the chart version after the Docker workflow passes.
