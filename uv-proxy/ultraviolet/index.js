const express = require("express");
const { createBareServer } = require("@titaniumnetwork-dev/ultraviolet");
const { uvConfig } = require("./config");

const app = express();
const bare = createBareServer(uvConfig);

app.use((req, res) => {
  bare.handleRequest(req, res);
});

// ✅ Instead of app.listen(), export the app
module.exports = app;
