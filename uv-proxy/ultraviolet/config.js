exports.uvConfig = {
  prefix: "/service/",
  bare: {
    server: "https://bare-server.vercel.app",
    encodeUrl: true
  },
  handler: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
};
