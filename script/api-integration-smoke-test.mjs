import { execFileSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';

const image = process.argv[2] || 'gocam:production';
const environment = {
  ENCRYPTION_KEY: randomBytes(16).toString('hex'),
  SESSION_SECRET: randomBytes(32).toString('hex'),
  CALLBACK_WEBHOOK_SECRET: randomBytes(32).toString('hex'),
  CALLBACK_SECRET_HEADER: 'x-consumer-webhook-secret',
  HTTP_SERVER_HOST: 'verify.example.test',
  HTTP_SERVER_PROTOCOL: 'https',
  API_INTEGRATION: 'true',
  CALLBACK_ALLOWED_ORIGINS: 'http://127.0.0.1:3900',
};
const platform = process.env.TEST_PLATFORM ? ['--platform', process.env.TEST_PLATFORM] : [];
execFileSync('docker', ['run', '--rm', '-i', ...platform,
  ...Object.entries(environment).flatMap(([key, value]) => ['-e', `${key}=${value}`]),
  image, 'node', '-'], { encoding: 'utf8', timeout: 60000, stdio: ['pipe', 'inherit', 'inherit'], input: `
const assert = require('node:assert/strict');
const http = require('node:http');
const { spawn } = require('node:child_process');
const { once } = require('node:events');
const { AvsEncryption } = require('./app/backend/lib/encryption');
const { AvsStorageSession } = require('./app/backend/storage/session');
(async () => {
  const callback = http.createServer();
  callback.listen(3900, '127.0.0.1');
  await once(callback, 'listening');
  const app = spawn(process.execPath, ['app/backend/app.js'], { stdio: 'ignore' });
  try {
    let ready = false;
    for (let i = 0; i < 100; i++) {
      try { ready = (await fetch('http://127.0.0.1:3300/healthz')).ok; } catch {}
      if (ready) break;
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    assert.ok(ready, 'GoCam must start');
    const form = {
      colorConfigBodyBackgroundInput: '#ffffff', colorConfigBodyForegroundInput: '#000000',
      colorConfigButtonBackgroundInput: '#ffffff', colorConfigButtonForegroundInput: '#000000',
      colorConfigButtonForegroundCTAInput: '#000000',
      callbackUrl: 'http://127.0.0.1:3900/webhooks/verification/test-user',
    };
    const response = await fetch('http://127.0.0.1:3300/getVerificationPayloadAndUrl', {
      method: 'POST', body: new URLSearchParams(form),
    });
    assert.equal(response.status, 200);
    const { content } = await response.json();
    const { sessionId } = JSON.parse(content.payload);
    assert.ok(Number.isInteger(sessionId) && sessionId > 0 && sessionId < 2 ** 31);
    const url = new URL(content.url);
    assert.equal(url.origin, 'https://verify.example.test');
    const encrypted = url.searchParams.get('d');
    assert.equal(AvsEncryption.decryptString(encrypted).sessionId, sessionId);
    const storage = new AvsStorageSession();
    assert.equal(storage.start(encrypted).sessionId, sessionId);
    assert.equal(storage.getById(sessionId).stateInt, AvsStorageSession.SESSION_STATE_IN_PROGRESS);
    assert.throws(() => storage.start(encrypted), /already used/);
    const expired = AvsEncryption.decryptString(encrypted);
    expired.creationTimestamp = Date.now() - 11 * 60 * 1000;
    assert.throws(() => new AvsStorageSession().start(AvsEncryption.encryptObject(expired)), /expired/);
    const received = once(callback, 'request');
    storage.end(sessionId, AvsStorageSession.SESSION_STATE_SUCCESS, 3, 0, 'GB', '', 'selfie');
    const [request, result] = await received;
    assert.equal(request.headers[process.env.CALLBACK_SECRET_HEADER], process.env.CALLBACK_WEBHOOK_SECRET);
    let body = '';
    for await (const chunk of request) body += chunk;
    const data = new URLSearchParams(body);
    assert.equal(Number(data.get('sessionId')), sessionId);
    assert.equal(data.get('state'), 'success');
    result.end('ok');
    const denied = await fetch('http://127.0.0.1:3300/getVerificationPayloadAndUrl', {
      method: 'POST', body: new URLSearchParams({ ...form, callbackUrl: 'https://untrusted.example/webhook' }),
    });
    assert.equal(denied.status, 400);
    console.log('API session correlation, callback authentication, replay and expiry tests passed');
  } finally {
    callback.close();
    app.kill('SIGTERM');
    await once(app, 'exit');
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
` });
