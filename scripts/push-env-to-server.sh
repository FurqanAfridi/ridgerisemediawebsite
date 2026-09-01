#!/usr/bin/env bash
# Push local .env to the production server (never commit .env to git).
# Usage:
#   DEPLOY_HOST=207.244.228.170 DEPLOY_USER=root ./scripts/push-env-to-server.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="${ENV_FILE:-${ROOT}/.env}"
HOST="${DEPLOY_HOST:?Set DEPLOY_HOST}"
USER="${DEPLOY_USER:-root}"
PORT="${DEPLOY_PORT:-22}"
REPO_REMOTE="${DEPLOY_REPO_DIR:-/root/landers/ridgerisemediawebsite/ridgerisemediawebsite}"
SSH_KEY="${DEPLOY_SSH_KEY:-}"

if [ ! -f "${ENV_FILE}" ]; then
  echo "ERROR: ${ENV_FILE} not found"
  exit 1
fi

SSH_BASE=(-o StrictHostKeyChecking=accept-new)
if [ -n "${SSH_KEY}" ]; then
  SSH_BASE+=(-i "${SSH_KEY}" -o IdentitiesOnly=yes)
fi

echo "==> Upload .env -> ${USER}@${HOST}:${REPO_REMOTE}/.env"
scp -P "${PORT}" "${SSH_BASE[@]}" "${ENV_FILE}" "${USER}@${HOST}:${REPO_REMOTE}/.env"

echo "==> Restart lead API"
ssh -p "${PORT}" "${SSH_BASE[@]}" "${USER}@${HOST}" \
  "cd '${REPO_REMOTE}' && chmod +x scripts/setup-leads-api.sh && ./scripts/setup-leads-api.sh"

echo "==> Done"
