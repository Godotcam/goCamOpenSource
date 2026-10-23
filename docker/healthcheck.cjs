const http = require('node:http');

// Probe the local listener, independently of the public hostname and TLS proxy.
const address = process.env.HTTP_BIND_ADDRESS || '0.0.0.0';
const host = address === '0.0.0.0' ? '127.0.0.1' : address === '::' ? '::1' : address;
const request = http.get({
  host,
  port: Number(process.env.HTTP_SERVER_PORT || 3300),
  path: '/healthz',
  timeout: 3000,
}, (response) => {
  response.resume();
  process.exitCode = response.statusCode === 200 ? 0 : 1;
});
request.on('timeout', () => request.destroy(new Error('Health check timed out')));
request.on('error', () => { process.exitCode = 1; });
