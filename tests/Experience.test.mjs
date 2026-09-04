import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

let vite;
let Experience;

before(async () => {
  vite = await createServer({
    logLevel: 'silent',
    server: { middlewareMode: true },
    appType: 'custom',
  });

  ({ default: Experience } = await vite.ssrLoadModule('/src/components/Experience.jsx'));
});

after(async () => {
  await vite?.close();
});

test('renders the CyfroSec experience with its accessible privacy-friendly video', () => {
  const html = renderToStaticMarkup(React.createElement(Experience));

  assert.match(html, />CyfroSec \u2022 Krakow, Poland/);
  assert.match(html, /Develop secure, high-concurrency backend and AI systems for a remote cybersecurity startup\./);
  assert.match(html, /Developed high-concurrency FastAPI backends integrated with Keycloak IAM and RBAC policies/);
  assert.match(html, /Architected a modular extensibility layer \(MCP\) for third-party tool integration/);
  assert.match(html, /Optimized Hybrid RAG pipelines using vector databases and structured data/);
  assert.match(html, /<iframe[^>]+src="https:\/\/www\.youtube-nocookie\.com\/embed\/FMmvLzTQN5w"/);
  assert.match(html, /<iframe[^>]+title="CyfroSec product showcase"/);
  assert.match(html, /<iframe[^>]+loading="lazy"/);
});
