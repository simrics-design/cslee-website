import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

// CSP script hashes use HTML parser newline normalization, including when the
// repository is checked out with Windows CRLF line endings.
const path = new URL('../index.html', import.meta.url);
const source = (await readFile(path, 'utf8')).replace(/\r\n?/g, '\n');
let html = source;
html = html.replace(/<meta http-equiv="Content-Security-Policy" content="[^"]*">\s*/g, '')
  .replace(/<meta name="referrer" content="[^"]*">\s*/g, '');
const hashes = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
  .filter(([, attrs]) => !/\bsrc\s*=/.test(attrs))
  .map(([, , body]) => `'sha256-${createHash('sha256').update(body.replace(/\r\n?/g, '\n')).digest('base64')}'`);
const policy = [
  "default-src 'none'",
  `script-src 'self' https://www.googletagmanager.com ${hashes.join(' ')}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
  "font-src 'self'",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  'upgrade-insecure-requests',
].join('; ');
html = html.replace(/<meta charset="utf-8">/i, '');
html = html.replace(/<head>/i, `<head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="${policy}"><meta name="referrer" content="strict-origin-when-cross-origin">`).trimEnd() + '\n';
if (process.argv.includes('--check')) {
  if (html !== source) throw new Error('Run node tools/security-policy.mjs after changing inline scripts.');
  console.log('Static homepage CSP hashes and ordering verified.');
} else {
  await writeFile(path, html, 'utf8');
}
