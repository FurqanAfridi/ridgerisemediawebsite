#!/usr/bin/env bash
# Wire ridgerisemedia.com (port 80) → host nginx on :786
# Safe: only adds a NEW host route. Does not edit other lander configs.
#
# Run ON THE SERVER as root:
#   bash scripts/wire-domain.sh
#
set -euo pipefail

DOMAIN="${DOMAIN:-ridgerisemedia.com}"
WWW_DOMAIN="${WWW_DOMAIN:-www.ridgerisemedia.com}"
UPSTREAM="${UPSTREAM:-http://172.17.0.1:786}"
CONF_NAME="ridgerisemedia.com.conf"

echo "==> Domain: ${DOMAIN} (+ ${WWW_DOMAIN})"
echo "==> Upstream: ${UPSTREAM}"
echo

# Confirm host nginx is serving the site on 786
if ! curl -fsS -o /dev/null -w "%{http_code}" "http://127.0.0.1:786/" | grep -qE '200|301|302'; then
  echo "ERROR: http://127.0.0.1:786 is not healthy."
  echo "Fix the RidgeRise nginx site first, then re-run."
  exit 1
fi
echo "OK: host nginx on :786 responds"

# Find container publishing host port 80
CID="$(docker ps --filter publish=80 --format '{{.ID}}' | head -n1 || true)"
if [ -z "${CID}" ]; then
  echo "ERROR: No Docker container is publishing port 80."
  exit 1
fi

NAME="$(docker inspect -f '{{.Name}}' "$CID" | sed 's#^/##')"
IMAGE="$(docker inspect -f '{{.Config.Image}}' "$CID")"
echo "OK: port 80 container = ${NAME} (${IMAGE})"
echo

# Render nginx proxy snippet (works for nginx / nginx-proxy style mounts)
read -r -d '' NGINX_SNIPPET <<EOF || true
# Managed by wire-domain.sh — RidgeRise Media only
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} ${WWW_DOMAIN};

    location / {
        proxy_pass ${UPSTREAM};
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
EOF

echo "---------- Suggested nginx server block ----------"
echo "$NGINX_SNIPPET"
echo "--------------------------------------------------"
echo

# Common mount points for reverse-proxy nginx containers
CANDIDATES=(
  "/etc/nginx/conf.d"
  "/etc/nginx/vhost.d"
  "/etc/nginx/sites-enabled"
  "/etc/nginx/sites-available"
)

MOUNTS="$(docker inspect -f '{{range .Mounts}}{{.Source}} -> {{.Destination}}{{println}}{{end}}' "$CID")"
echo "==> Container mounts:"
echo "$MOUNTS"
echo

DEST_IN_CONTAINER=""
HOST_DIR=""

while IFS= read -r line; do
  [ -z "$line" ] && continue
  SRC="${line%% -> *}"
  DST="${line##* -> }"
  for c in "${CANDIDATES[@]}"; do
    if [ "$DST" = "$c" ] || [[ "$DST" == "$c"* ]]; then
      HOST_DIR="$SRC"
      DEST_IN_CONTAINER="$DST"
      break 2
    fi
  done
done <<< "$MOUNTS"

if [ -n "${HOST_DIR}" ] && [ -d "${HOST_DIR}" ]; then
  TARGET="${HOST_DIR}/${CONF_NAME}"
  echo "==> Writing ${TARGET}"
  printf '%s\n' "$NGINX_SNIPPET" > "$TARGET"
  echo "OK: config written"

  echo "==> Reloading nginx inside ${NAME}"
  if docker exec "$CID" nginx -t; then
    docker exec "$CID" nginx -s reload || docker kill -s HUP "$CID"
    echo "OK: reloaded"
  else
    echo "ERROR: nginx -t failed inside container — removing bad config"
    rm -f "$TARGET"
    exit 1
  fi
else
  echo "Could not auto-detect a writable nginx conf mount."
  echo
  echo "Do this manually (safe — new file only):"
  echo "  1) Find where ${NAME} stores vhost configs (see mounts above)."
  echo "  2) Create ${CONF_NAME} with the server block printed above."
  echo "  3) docker exec ${NAME} nginx -t && docker exec ${NAME} nginx -s reload"
  echo
  echo "If the proxy is Traefik / Caddy (not nginx), paste:"
  echo "  docker ps"
  echo "  docker inspect ${NAME}"
  echo "and we will wire labels instead."
  exit 2
fi

echo
echo "==> DNS check"
dig +short "$DOMAIN" || true
echo
echo "==> Test from server"
curl -sI -H "Host: ${DOMAIN}" "http://127.0.0.1/" | head -n 15 || true
echo
echo "Open: http://${DOMAIN}"
echo "If HTTPS is handled by this same proxy, add a cert for ${DOMAIN} the same way your other landers do."
