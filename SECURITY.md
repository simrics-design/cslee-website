# Security maintenance

The public `www.cslee.net` site is served by GitHub Pages from the root static
HTML, CSS, JavaScript and image files. It does not run the Next.js/vinext Sites
starter in this repository. The separate review Site has its own deployment.

- Keep HTTPS enforcement enabled in Pages settings.
- `_config.yml` excludes development files from the generated website. This is
  deployment hygiene, not secrecy: this GitHub repository is public. Never
  commit credentials, environment files, private data or logs.
- The homepage CSP allows only local scripts, Google Tag Manager, and hashes
  for the existing inline scripts. After editing an inline script, run
  `node tools/security-policy.mjs`, then `node tools/security-policy.mjs --check`.
- Verify mobile navigation, email copy, note expansion and analytics loading
  in a browser after any CSP change. Inline styles remain allowed for the
  existing design. CSP in a meta tag cannot enforce `frame-ancestors`.
- GitHub Pages controls HTTP response headers. HSTS, frame protection and
  `X-Content-Type-Options` require platform support or a separately authorized
  proxy/hosting change; adding an `_headers` file here does not enable them.
- Before running or deploying the optional Sites starter, use a supported,
  security-patched Node.js version, run `pnpm install --frozen-lockfile`,
  `pnpm audit`, and its build/render tests. A dependency audit does not test
  the deployed site or establish that an attack occurred.
- Keep the review Site's current audience restrictions unless the owner asks
  to change them. Do not republish it as part of the Pages deployment.
