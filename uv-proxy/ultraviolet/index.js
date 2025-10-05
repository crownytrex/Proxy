const express = require("express");
const { createBareServer } = require("@titaniumnetwork-dev/ultraviolet");
const { uvConfig } = require("./config");

const app = express();
const bare = createBareServer(uvConfig);

app.use((req, res) => {
  bare.handleRequest(req, res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ UV Proxy running on port ${port}`);
});
