#!/bin/bash
set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}=== VMST Solutions - Deploy ===${NC}"
echo ""

# 1. Ask for commit message
read -p "Commit message: " COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
  echo "Commit message is required."
  exit 1
fi

# 2. Git add, commit, push
echo -e "\n${GREEN}[1/4] Committing...${NC}"
git add -A
git commit -m "$COMMIT_MSG"
git push origin main

# 3. Build
echo -e "\n${GREEN}[2/4] Building Next.js...${NC}"
npm run build

# 4. Deploy to VPS
echo -e "\n${GREEN}[3/4] Deploying to VPS...${NC}"
rsync -avz --delete .next/ root@103.37.60.86:/var/www/vmst-nextjs/.next/
rsync -avz public/ root@103.37.60.86:/var/www/vmst-nextjs/public/
rsync -avz package.json package-lock.json next.config.ts ecosystem.config.js root@103.37.60.86:/var/www/vmst-nextjs/

# 5. Restart on VPS
echo -e "\n${GREEN}[4/4] Restarting on VPS...${NC}"
ssh root@103.37.60.86 "cd /var/www/vmst-nextjs && npm install --production && pm2 restart vmst-nextjs || pm2 start ecosystem.config.js"

echo -e "\n${GREEN}Done! Site is live.${NC}"
