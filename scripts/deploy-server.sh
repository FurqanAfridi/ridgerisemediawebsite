#!/usr/bin/env bash
# Manual / server-side deploy for RidgeRise Media.
# Safe scope: only updates this repo build + /var/www/ridgerisemedia
# Does NOT touch Docker, other landers, or nginx sites besides this app's files.
set -euo pipefail

REPO_DIR="${REPO_DIR:-/root/landers/ridgerisemediawebsite/ridgerisemediawebsite}"
WEB_ROOT="${WEB_ROOT:-/var/www/ridgerisemedia}"
BRANCH="${BRANCH:-main}"

echo "==> Deploying RidgeRise Media"
echo "    repo: ${REPO_DIR}"
echo "    web:  ${WEB_ROOT}"

cd "${REPO_DIR}"

echo "==> Pull ${BRANCH}"
git fetch origin "${BRANCH}"
git checkout "${BRANCH}"
git pull --ff-only origin "${BRANCH}"

echo "==> Install + build"
npm ci
npm run build

echo "==> Publish dist -> ${WEB_ROOT}"
mkdir -p "${WEB_ROOT}"
rsync -a --delete "${REPO_DIR}/dist/" "${WEB_ROOT}/"

if [ -f "${REPO_DIR}/.env" ]; then
  echo "==> Lead API (.env present)"
  chmod +x "${REPO_DIR}/scripts/setup-leads-api.sh"
  "${REPO_DIR}/scripts/setup-leads-api.sh"
else
  echo "WARN: No ${REPO_DIR}/.env — lead API not restarted."
  echo "      Copy .env to the server, then run: ./scripts/setup-leads-api.sh"
fi

echo "==> Done"
ls -la "${WEB_ROOT}" | head -20
echo "Site: https://ridgerisemedia.com"
