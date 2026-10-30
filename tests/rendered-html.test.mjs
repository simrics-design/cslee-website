import assert from "node:assert/strict";
import test, { before, after } from "node:test";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { fileURLToPath } from "node:url";

let preview;
let origin;
let output = "";

// The built Worker imports cloudflare:workers. Run it in the Cloudflare Vite
// preview runtime instead of importing it into Node's ESM loader.
before(async () => {
  const portServer = createServer();
  await new Promise(resolve => portServer.listen(0, "127.0.0.1", resolve));
  const port = portServer.address().port;
  await new Promise(resolve => portServer.close(resolve));
  origin = `http://127.0.0.1:${port}`;
  preview = spawn(process.execPath, [
    fileURLToPath(new URL("../node_modules/vite/bin/vite.js", import.meta.url)),
    "preview", "--host", "127.0.0.1", "--port", String(port), "--strictPort",
  ], { cwd: fileURLToPath(new URL("..", import.meta.url)), windowsHide: true });
  preview.stdout.on("data", data => { output += data; });
  preview.stderr.on("data", data => { output += data; });
  preview.on("error", error => { output += error.message; });
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    if (preview.exitCode !== null) throw new Error(`Preview exited: ${output}`);
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch { /* wait for the local Worker */ }
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  throw new Error(`Preview did not start: ${output}`);
});

after(async () => {
  if (preview && preview.exitCode === null) {
    const exited = new Promise(resolve => preview.once("exit", resolve));
    preview.kill();
    await exited;
  }
});

async function render() {
  return fetch(origin, { headers: { accept: "text/html" } });
}

test("개인 홈페이지의 핵심 콘텐츠를 렌더링한다", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /이창섭 · CS Lee \| Field Notes/);
  assert.match(html, /현장에서 배운 것을/);
  assert.match(html, /공장 설립과 가동 준비/);
  assert.match(html, /인도 공장 설립하고 운영하기/);
  assert.match(html, /simrics@gmail.com/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
