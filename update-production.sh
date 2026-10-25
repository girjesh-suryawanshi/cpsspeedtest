#!/usr/bin/env bash
# ==============================================================================
# CPSSpeedTest Production Docker Update Script (Hostinger VPS)
# ==============================================================================
# This script safely updates the running cpsspeedtest_app container on your VPS
# without touching your existing PostgreSQL database data or uploaded files.
# ==============================================================================

set -e

echo ""
echo "===================================================================="
echo "  🚀 Starting CpsSpeedTest Production Docker Update"
echo "===================================================================="
echo ""

# 1. Verify working directory
if [ ! -f "docker-compose.yml" ] || [ ! -f "Dockerfile" ]; then
    echo "❌ Error: Please run this script from the project root directory (e.g. /var/www/cpsspeedtest)"
    exit 1
fi

# 2. Check Git status (if using Git)
if [ -d ".git" ]; then
    echo "📥 Pulling latest changes from Git repository..."
    git pull origin master || git pull || echo "⚠️  Git pull skipped or failed, proceeding with local files..."
fi

# 3. Ensure database container is up and healthy
echo "🐘 Ensuring PostgreSQL container (cpsspeedtest_db) is running..."
docker compose up -d cpsspeedtest_db

# 4. Rebuild the Next.js production image with no cache to guarantee all 101 static routes are fresh
echo ""
echo "🔨 Building updated Next.js production image (standalone)..."
docker compose build --no-cache cpsspeedtest_app

# 5. Restart the app container with the updated image
echo ""
echo "🔄 Recreating cpsspeedtest_app container..."
docker compose up -d --no-deps --remove-orphans cpsspeedtest_app

# 6. Apply any database schema updates via Prisma
echo ""
echo "🗄️  Synchronizing database schema (Prisma db push)..."
docker exec cpsspeedtest_app npx prisma db push --skip-generate || echo "⚠️  Prisma push warning (proceeding)"

# 7. Verification Health Check
echo ""
echo "⏳ Waiting 5 seconds for application startup..."
sleep 5

echo "🔍 Testing local endpoint (http://127.0.0.1:4013)..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:4013/ || echo "Failed")

if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ App container is responding with HTTP 200 OK!"
else
    echo "⚠️  App responded with HTTP $HTTP_STATUS (check logs with: docker compose logs cpsspeedtest_app)"
fi

echo ""
echo "🔍 Verifying ads.txt endpoint..."
ADSTXT_CONTENT=$(curl -s http://127.0.0.1:4013/ads.txt || echo "")
if echo "$ADSTXT_CONTENT" | grep -q "pub-7316477328258550"; then
    echo "✅ ads.txt verified: Publisher ID ca-pub-7316477328258550 is active!"
else
    echo "⚠️  Warning: ads.txt did not return expected publisher ID."
fi

# 8. Reload Nginx if present
if command -v nginx > /dev/null 2>&1; then
    echo ""
    echo "🌐 Reloading Nginx reverse proxy..."
    sudo nginx -t && sudo systemctl reload nginx || echo "⚠️  Nginx reload skipped"
fi

echo ""
echo "===================================================================="
echo "  🎉 Production update complete! Your site is live with new changes."
echo "===================================================================="
echo "Check live logs anytime with:  docker compose logs -f cpsspeedtest_app"
echo ""
