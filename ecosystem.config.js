module.exports = {
  apps: [
    {
      name: "vmst-nextjs",
      script: "node_modules/.bin/next",
      args: "start -p 3001",
      cwd: "/var/www/vmst-nextjs",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
