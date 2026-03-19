Local
npm install --legacy-peer-deps
npm run build

VPS

cd /var/www/vmst-nextjs
git pull origin main
npm install --legacy-peer-deps
npm run build
pm2 restart vmst-nextjs
