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
