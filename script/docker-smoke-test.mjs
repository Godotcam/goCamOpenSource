import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { setTimeout as delay } from 'node:timers/promises';

// Run from the repository root after building the image. No npm install required.
const image = process.argv[2] || 'gocam:production';
const platform = process.env.TEST_PLATFORM;
const platformArgs = platform ? ['--platform', platform] : [];
const name = `gocam-smoke-${process.pid}`;
const environment = {
  ENCRYPTION_KEY: randomBytes(16).toString('hex'),
  SESSION_SECRET: randomBytes(32).toString('hex'),
  HTTP_SERVER_HOST: 'verify.example.test',
  HTTP_SERVER_PROTOCOL: 'https',
  HTTP_SERVER_PORT: '3400',
  TRUST_PROXY: '1',
  ENABLE_FRONTEND_DEBUG: 'false',
};
const envArgs = (values) => Object.entries(values).flatMap(([key, value]) => ['-e', `${key}=${value}`]);
const docker = (...args) => execFileSync('docker', args, {
  encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 60000,
}).trim();

try {
  // These flags also exercise the deployment's restricted filesystem/privileges.
  docker('run', ...platformArgs, '-d', '--name', name, '--read-only',
    '--cap-drop=ALL', '--security-opt=no-new-privileges:true',
    '--tmpfs', '/tmp:size=16m', '--tmpfs', '/app/log:size=16m,uid=1000,gid=1000,mode=0700',
    '--health-interval=1s', '--health-start-period=1s',
    '-p', '127.0.0.1::3400', ...envArgs(environment), image);
  const binding = docker('port', name, '3400/tcp');
  const baseUrl = `http://${binding}`;
  const deadline = Date.now() + 60000;
  while (docker('inspect', '-f', '{{.State.Health.Status}}', name) !== 'healthy') {
    assert.ok(Date.now() < deadline, 'Container did not become healthy');
    assert.equal(docker('inspect', '-f', '{{.State.Running}}', name), 'true', 'Container exited');
    await delay(500);
  }

  async function request(path, options = {}) {
    const response = await fetch(`${baseUrl}${path}`, { signal: AbortSignal.timeout(10000), ...options });
    assert.equal(response.status, 200, path);
    return response;
  }

  const health = await request('/healthz');
  assert.equal(health.headers.get('set-cookie'), null);
  assert.deepEqual(await health.json(), { status: 'ok' });
  const home = await request('/');
  assert.equal(home.headers.get('set-cookie'), null, 'Visiting the home page must not allocate a session');
  assert.match(await home.text(), /Go.cam demo/);
  for (const path of ['/token', '/token/iframeCheck']) {
    assert.match(await (await request(path)).text(), /<!DOCTYPE HTML>/);
  }

  for (const [path, minimumBytes, contentType] of [
    ['/static/css/main.css', 1000, /text\/css/],
    ['/static/js/app/avs.js', 10000, /javascript/],
    ['/static/js/app/avsFactory.js', 10000, /javascript/],
    ['/static/js/app/common.js', 100, /javascript/],
    ['/static/js/app/avsFactoryIframeSdk.js', 100, /javascript/],
    ['/static/js/app/avsFactoryIframeCheck.js', 100, /javascript/],
    ['/static/js/appFiles/faw/age_gender_model-weights_manifest.json', 100, /json/],
    ['/static/js/appFiles/faw/age_gender_model-shard1', 100000, /octet-stream/],
    ['/static/js/vendor/face-api-1.7.12/tfjs-backend-wasm-simd.wasm', 100000, /wasm/],
    ['/static/js/appFiles/tjs/data/eng.traineddata.gz', 100000, /gzip/],
  ]) {
    const response = await request(path);
    assert.match(response.headers.get('content-type'), contentType, path);
    assert.ok((await response.arrayBuffer()).byteLength > minimumBytes, path);
  }

  // Generate an encrypted payload through the real HTTP API and render its page.
  const payloadResponse = await request('/getVerificationPayloadAndUrl', {
    method: 'POST',
    body: new URLSearchParams({
      colorConfigBodyBackgroundInput: '#ffffff', colorConfigBodyForegroundInput: '#000000',
      colorConfigButtonBackgroundInput: '#ffffff', colorConfigButtonForegroundInput: '#000000',
      colorConfigButtonForegroundCTAInput: '#000000',
      callbackUrl: `${baseUrl}/callback`, demoPageUrl: `${baseUrl}/`,
    }),
  });
  const payload = await payloadResponse.json();
  assert.equal(payload.content?.success, 1, JSON.stringify(payload));
  const tokenPath = `/token?d=${encodeURIComponent(payload.content.payload)}`;
  const token = await request(tokenPath, { headers: { 'X-Forwarded-Proto': 'https' } });
  const cookie = token.headers.get('set-cookie');
  assert.match(cookie, /connect\.sid=/);
  assert.match(cookie, /HttpOnly/);
  assert.match(cookie, /Secure/);
  assert.match(cookie, /SameSite=None/);
  const tokenHtml = await token.text();
  assert.match(tokenHtml, /AvsToken.main/);
  assert.ok(!tokenHtml.includes('id="debugArea"'), 'false must disable frontend debugging');
  const iframePayload = (await (await request('/getVerificationPayloadAndUrl', {
    method: 'POST',
    body: new URLSearchParams({
      colorConfigBodyBackgroundInput: '#ffffff', colorConfigBodyForegroundInput: '#000000',
      colorConfigButtonBackgroundInput: '#ffffff', colorConfigButtonForegroundInput: '#000000',
      colorConfigButtonForegroundCTAInput: '#000000',
      callbackUrl: `${baseUrl}/callback`, demoPageUrl: `${baseUrl}/`,
    }),
  })).json()).content.payload;
  const iframe = await request(`/token/iframeRender?d=${encodeURIComponent(iframePayload)}`,
    { headers: { 'X-Forwarded-Proto': 'https' } });
  assert.match(await iframe.text(), /AvsToken.main/);

  const insecureToken = await request(tokenPath);
  assert.equal(insecureToken.headers.get('set-cookie'), null, 'HTTPS mode must not issue cookies over HTTP');
  await insecureToken.text();
  const callback = await request('/callback', {
    method: 'POST', body: new URLSearchParams({ smoke: 'test' }),
  });
  assert.equal((await callback.json()).content?.success, 1);

  docker('exec', name, 'node', '-e', `
    const assert = require('node:assert/strict');
    const fs = require('node:fs');
    assert.equal(process.version, 'v24.22.1');
    assert.equal(process.getuid(), 1000);
    for (const path of ['.env', '.env.docker', '.git', 'source', 'node_modules/typescript', 'node_modules/gulp', 'node_modules/gulp-concat']) {
      assert.ok(!fs.existsSync(path), path + ' must not be in the runtime image');
    }
    assert.throws(() => fs.writeFileSync('/app/unexpected-write', 'test'));
  `);

  for (const [overrides, message] of [
    [{ ENCRYPTION_KEY: '' }, /unique ENCRYPTION_KEY/],
    [{ ENCRYPTION_KEY: 'zIkmW2zEgzlTLTRC5xeMbcOhHcE5sBHB' }, /unique ENCRYPTION_KEY/],
    [{ ENCRYPTION_KEY: 'too-short' }, /matching key length/],
    [{ SESSION_SECRET: '' }, /SESSION_SECRET/],
    [{ HTTP_SERVER_PORT: 'invalid' }, /HTTP_SERVER_PORT/],
    [{ HTTP_SERVER_PROTOCOL: 'htps' }, /HTTP_SERVER_PROTOCOL/],
  ]) {
    const result = spawnSync('docker', ['run', ...platformArgs, '--rm',
      ...envArgs({ ...environment, ...overrides }), image], { encoding: 'utf8', timeout: 15000 });
    assert.equal(result.status, 1, 'Invalid production configuration must exit with status 1');
    assert.match(result.stderr, message);
  }

  docker('stop', '--time', '30', name);
  assert.equal(docker('inspect', '-f', '{{.State.ExitCode}}', name), '0', 'SIGTERM must shut down cleanly');
  console.log(`Docker smoke tests passed: ${image}${platform ? ` (${platform})` : ''}`);
} catch (error) {
  try { console.error(docker('logs', name)); } catch {}
  throw error;
} finally {
  spawnSync('docker', ['rm', '-f', name], { stdio: 'ignore', timeout: 10000 });
}
