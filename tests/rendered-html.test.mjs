import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
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
