module.exports = {
  apps: [
    {
      name: "school",
      script: "npm.cmd",
      args: "run dev",
      interpreter: "none",
      env: {
        NODE_ENV: "development"
      }
    }
  ]
};