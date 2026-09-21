# CpsSpeedTest Production Docker Deployment Guide

This guide provides step-by-step instructions for deploying **CpsSpeedTest** to a Linux VPS (Ubuntu/Debian) using **Docker**, **Docker Compose**, **Nginx**, **Certbot (SSL)**, and **Google AdSense**.

---

## 📋 System Requirements

* **OS:** Ubuntu 22.04 LTS or Debian 12 (recommended)
* **RAM:** Minimum 2 GB (4 GB recommended)
* **Storage:** 20 GB SSD
* **Installed Software:** Docker, Docker Compose, Nginx, Certbot

---

## 🛠️ Step 1: Install Docker & Dependencies (If Not Installed)

Run the following commands on your VPS:

```bash
# 1. Update system packages
sudo apt update && sudo apt upgrade -y

# 2. Install Docker & Docker Compose Plugin
sudo apt install -y ca-certificates curl gnupg lsb-release nginx certbot python3-certbot-nginx
curl -fsSL https://get.docker.com | sudo sh

# 3. Verify Docker installation
sudo docker --version
sudo docker compose version
```

---

## 🚀 Step 2: Prepare Project Directory on VPS

1. Clone or copy your project repository to `/var/www/cpsspeedtest` or your preferred directory:

```bash
sudo mkdir -p /var/www/cpsspeedtest
sudo chown -R $USER:$USER /var/www/cpsspeedtest
cd /var/www/cpsspeedtest
```

2. Copy all project files (`Dockerfile`, `docker-compose.yml`, `next.config.mjs`, `package.json`, `public/`, `src/`, etc.).

---

## 🔐 Step 3: Configure Environment Variables

Create a `.env` file in the project root (`/var/www/cpsspeedtest/.env`):

```env
# Node Environment
NODE_ENV=production

# Database Connection (Docker Internal Network)
DATABASE_URL="postgresql://postgres:deergh@cpsspeedtest_db:5432/cpstest?schema=public"

# Admin Authentication Secret
ADMIN_PASSWORD="YourSecureAdminPasswordHere"
ADMIN_SESSION_SECRET="YourSuperSecretSessionKey32CharsLong"

# Base URL
NEXT_PUBLIC_SITE_URL="https://www.cpsspeedtest.com"
```

---

## 🏗️ Step 4: Build & Launch Docker Containers

Run Docker Compose to build the production Next.js image and start the PostgreSQL database container:

```bash
# Build the Next.js standalone container
docker compose build --no-cache

# Start containers in detached background mode
docker compose up -d
```

### Verify Container Status:
```bash
docker compose ps
```
You should see:
* `cpsspeedtest_db` → Status: `healthy`
* `cpsspeedtest_app` → Status: `running` (Listening on `127.0.0.1:4013`)

---

## 🗄️ Step 5: Initialize Database Tables (Prisma Push)

Once the database container is healthy, run the Prisma migration push inside the container:

```bash
docker exec cpsspeedtest_app npx prisma db push
```

*(Optional)* Seed default categories or data if required:
```bash
docker exec cpsspeedtest_app npx prisma db seed
```

---

## 🌐 Step 6: Configure Nginx Reverse Proxy

Create an Nginx configuration file for your domain:

```bash
sudo nano /etc/nginx/sites-available/cpsspeedtest
```

Paste the following Nginx configuration:

```nginx
server {
    listen 80;
    server_name cpsspeedtest.com www.cpsspeedtest.com;

    # Increase max upload size for image uploads
    client_max_body_size 20M;

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        proxy_pass http://127.0.0.1:4013;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static assets caching
    location /_next/static/ {
        proxy_pass http://127.0.0.1:4013;
        proxy_cache_bypass $http_upgrade;
        expires 365d;
        access_log off;
    }

    location /ads.txt {
        proxy_pass http://127.0.0.1:4013/ads.txt;
        proxy_set_header Host $host;
    }
}
```

Enable the configuration and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/cpsspeedtest /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔒 Step 7: Enable Free SSL (HTTPS) with Let's Encrypt

Run Certbot to issue and automatically configure HTTPS:

```bash
sudo certbot --nginx -d cpsspeedtest.com -d www.cpsspeedtest.com
```

Select option `2` to redirect HTTP traffic automatically to HTTPS.

---

## ✅ Step 8: Production Verification Checklist

1. **Visit Site:** Open `https://www.cpsspeedtest.com` in your browser.
2. **Verify Google AdSense Code:**
   * View Page Source (`Ctrl + U`) and search for `ca-pub-7316477328258550`.
   * Verify `<meta name="google-adsense-account" content="ca-pub-7316477328258550" />` is in `<head>`.
3. **Verify `ads.txt` File:**
   * Visit `https://www.cpsspeedtest.com/ads.txt`.
   * Confirm it displays:
     ```text
     google.com, pub-7316477328258550, DIRECT, f08c47fec0942fa0
     ```
4. **Verify Blog Pages:**
   * Visit `https://www.cpsspeedtest.com/blog` to verify all 20+ static guides render without errors.

---

## 🧹 Maintenance Commands

* **View App Logs:**
  ```bash
  docker compose logs -f cpsspeedtest_app
  ```
* **Restart App Container:**
  ```bash
  docker compose restart cpsspeedtest_app
  ```
* **Re-deploy Code Updates:**
  ```bash
  git pull
  docker compose build --no-cache
  docker compose up -d
  ```
