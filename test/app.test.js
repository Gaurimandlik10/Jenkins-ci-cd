const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');

function startServer() {
  return new Promise((resolve) => {
    const server = app.listen(0, () => resolve(server));
  });
}

test('GET /health returns ok', async () => {
  const server = await startServer();
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/health`);
  const body = await res.json();

  assert.strictEqual(res.status, 200);
  assert.strictEqual(body.status, 'ok');
  server.close();
});

test('GET / returns greeting', async () => {
  const server = await startServer();
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/`);
  const body = await res.json();

  assert.strictEqual(res.status, 200);
  assert.ok(body.message.includes('Hello'));
  server.close();
});