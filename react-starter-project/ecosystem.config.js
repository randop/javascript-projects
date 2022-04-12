const path = require("path");
const BASE_DIR = path.resolve(path.join(__dirname, "server"));

module.exports = {
  apps: [
    {
      name: "server",
      cwd: BASE_DIR,
      script: "server.js",
      watch: false,
    }
  ],
};
