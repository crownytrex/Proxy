// api/proxy.js
export default async function handler(req, res) {
  const target = req.query.url;
  if (!target) {
    return res.status(400).send("Missing URL");
  }

  try {
    const response = await fetch(target);
    const html = await response.text();
    res.setHeader("Content-Type", "text/html");
    res.send(html);
  } catch (err) {
    res.status(500).send("Error fetching target");
  }
}
