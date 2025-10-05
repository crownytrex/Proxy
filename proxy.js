export default async function handler(req, res) {
  const target = req.query.url;
  if (!target) return res.status(400).send("Missing URL");

  try {
    const response = await fetch(target);
    const contentType = response.headers.get("content-type") || "text/plain";
    const buffer = await response.arrayBuffer();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", contentType);
    res.status(200).send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).send("Proxy error");
  }
}
