# RidgeRise Media Website

Marketing landing page for RidgeRise Media.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Production

- **Live URL:** https://ridgerisemedia.com (Caddy on 80/443 → host nginx `:786`)
- **App files:** `/var/www/ridgerisemedia`
- **Source on server:** `/root/landers/ridgerisemediawebsite/ridgerisemediawebsite`
- **Caddy route** (with your other landers): `/root/database/supabase/docker/volumes/proxy/caddy/Caddyfile`

```caddy
ridgerisemedia.com, www.ridgerisemedia.com {
    reverse_proxy 172.17.0.1:786
}
```

Other landers are unchanged; only this host block was added.

## CI/CD (GitHub Actions)

On every push to `main` (and manual **Run workflow**), Actions:

1. Installs deps and builds `dist/`
2. Rsyncs **only** `dist/` → `/var/www/ridgerisemedia` over SSH

### One-time GitHub secrets

Add secrets in **both** places if you use the `production` environment (workflow does):

1. Repo → **Settings → Secrets and variables → Actions → Repository secrets**
2. Repo → **Settings → Environments → production → Environment secrets**

| Secret | Example value |
|--------|----------------|
| `DEPLOY_HOST` | `207.244.228.170` |
| `DEPLOY_USER` | `root` |
| `DEPLOY_SSH_KEY_B64` | Base64 of the **private** key (preferred — avoids newline corruption) |
| `DEPLOY_PORT` | `22` (optional) |
| `DEPLOY_PATH` | `/var/www/ridgerisemedia` (optional) |
| `DEPLOY_REPO_DIR` | `/root/landers/ridgerisemediawebsite/ridgerisemediawebsite` (optional) |
| `LEAD_API_ENV_B64` | Base64 of production `.env` for the lead API (see below) |

`LEAD_API_ENV_B64` (macOS):

```bash
base64 -i .env | pbcopy
# Paste into GitHub secret LEAD_API_ENV_B64 (repo + production environment)
```

### Lead API on production

The contact form posts to `/api/leads`. On the server:

1. Add **`LEAD_API_ENV_B64`** to GitHub Actions secrets (repo + `production` environment):

```bash
base64 -i .env | pbcopy   # paste into secret LEAD_API_ENV_B64
```

2. Each deploy syncs `server/`, writes `.env`, and restarts the `rrm-leads-api` systemd service.

**Or** push env manually (from a machine with SSH access):

```bash
DEPLOY_HOST=207.244.228.170 DEPLOY_USER=root DEPLOY_SSH_KEY=~/.ssh/your_key ./scripts/push-env-to-server.sh
```

3. Ensure host nginx on `:786` proxies `/api` to the Node API:

```nginx
location /api/ {
    proxy_pass http://127.0.0.1:3020;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Health check: `curl http://127.0.0.1:3020/api/health`

`DEPLOY_SSH_KEY` (raw PEM) also works, but `DEPLOY_SSH_KEY_B64` is more reliable.

### Deploy key on the server

```bash
# On your laptop
ssh-keygen -t ed25519 -C "gh-actions-ridgerise" -f ./ridgerise_deploy -N ""

# Install the PUBLIC key on the server (password auth once)
ssh-copy-id -i ./ridgerise_deploy.pub root@207.244.228.170

# Put the PRIVATE key into GitHub as base64 (macOS)
base64 -i ./ridgerise_deploy | pbcopy
# Linux: base64 -w0 ./ridgerise_deploy
# Paste clipboard into secret name: DEPLOY_SSH_KEY_B64
```

Verify the key works before re-running Actions:

```bash
ssh -i ./ridgerise_deploy root@207.244.228.170 'echo ok && ls /var/www/ridgerisemedia'
```

Ensure the web root exists:

```bash
mkdir -p /var/www/ridgerisemedia
```

### Manual deploy on the server

```bash
chmod +x scripts/deploy-server.sh
./scripts/deploy-server.sh
```
