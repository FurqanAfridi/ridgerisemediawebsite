#!/usr/bin/env bash
# Publish checklist for a RidgeRise blog post (Vite/TS content pipeline).
# Usage: ./scripts/publish-blog.sh what-is-pay-per-call-marketing
set -euo pipefail

SLUG="${1:-}"
if [ -z "$SLUG" ]; then
  echo "Usage: $0 <slug>"
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! grep -q "slug: \"$SLUG\"" src/data/blog.ts; then
  echo "ERROR: slug '$SLUG' not found in src/data/blog.ts"
  echo "Add the BlogPost object first (see content/blog/template.mdx)."
  exit 1
fi

echo "==> Regenerate sitemap"
node scripts/generate-sitemap.mjs

echo "==> Build + prerender"
npm run build

URL="https://ridgerisemedia.com/blog/${SLUG}"
TITLE="$(node -e "
import { createServer } from 'vite';
const v = await createServer({ root: '.', server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' });
const { getPostBySlug } = await v.ssrLoadModule('/src/data/blog.ts');
const { postSeo } = await v.ssrLoadModule('/src/data/seo.ts');
const post = getPostBySlug('${SLUG}');
const seo = postSeo(post);
console.log(seo.title + '\n' + seo.description);
await v.close();
")"

echo ""
echo "==> Live URL"
echo "$URL"
echo ""
echo "==> Social snippet"
echo "$TITLE"
echo ""
echo "Deploy: push to main (GitHub Actions) or run scripts/deploy-server.sh on Contabo."
