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

- **URL:** `http://ridgerisemedia.com:786`
- **Served path:** `/var/www/ridgerisemedia` (nginx on port `786`)
- **Source on server:** `/root/landers/ridgerisemediawebsite/ridgerisemediawebsite`

Other sites on this Contabo box (Docker / other landers) are intentionally left alone.

## CI/CD (GitHub Actions)

On every push to `main` (and manual **Run workflow**), Actions:

1. Installs deps and builds `dist/`
2. Rsyncs **only** `dist/` → `/var/www/ridgerisemedia` over SSH

### One-time GitHub secrets

Repo → **Settings → Secrets and variables → Actions** → add:

| Secret | Example value |
|--------|----------------|
| `DEPLOY_HOST` | `207.244.228.170` |
| `DEPLOY_USER` | `root` |
| `DEPLOY_SSH_KEY` | Full private key PEM (including `BEGIN` / `END` lines) |
| `DEPLOY_PORT` | `22` (optional) |
| `DEPLOY_PATH` | `/var/www/ridgerisemedia` (optional) |

Also create a GitHub **Environment** named `production` (workflow references it), or remove the `environment:` line from the workflow if you prefer not to use environments.

### Deploy key on the server

```bash
# On your laptop
ssh-keygen -t ed25519 -C "gh-actions-ridgerise" -f ./ridgerise_deploy -N ""

# Copy public key to the server
ssh-copy-id -i ./ridgerise_deploy.pub root@207.244.228.170

# Paste the PRIVATE key contents into GitHub secret DEPLOY_SSH_KEY
cat ./ridgerise_deploy
```

Ensure `/var/www/ridgerisemedia` exists and is writable by the deploy user:

```bash
mkdir -p /var/www/ridgerisemedia
```

### Manual deploy on the server

```bash
chmod +x scripts/deploy-server.sh
./scripts/deploy-server.sh
```
