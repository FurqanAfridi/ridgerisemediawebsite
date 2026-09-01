#!/usr/bin/env bash
# Install / restart the RidgeRise lead API on the server.
# Run on the server from the repo root after .env exists.
set -euo pipefail

REPO_DIR="${REPO_DIR:-$(cd "$(dirname "$0")/.." && pwd)}"
SERVICE_NAME="${SERVICE_NAME:-rrm-leads-api}"
PORT="${PORT:-3020}"

cd "${REPO_DIR}"

if [ ! -f .env ]; then
  echo "ERROR: ${REPO_DIR}/.env is missing. Add env vars before running this script."
  exit 1
fi

echo "==> Install production dependencies"
npm ci --omit=dev

UNIT_PATH="/etc/systemd/system/${SERVICE_NAME}.service"
echo "==> Write systemd unit -> ${UNIT_PATH}"
cat > "${UNIT_PATH}" <<EOF
[Unit]
Description=RidgeRise Media Lead API
After=network.target

[Service]
Type=simple
WorkingDirectory=${REPO_DIR}
ExecStart=$(command -v node) server/index.mjs
Restart=on-failure
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable "${SERVICE_NAME}"
systemctl restart "${SERVICE_NAME}"

echo "==> API status"
systemctl --no-pager --full status "${SERVICE_NAME}" | head -15 || true
curl -fsS "http://127.0.0.1:${PORT}/api/health" && echo || echo "WARN: health check failed on :${PORT}"
