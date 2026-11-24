const http = require("node:http");

function createServer() {
  return http.createServer((req, res) => {
    if (req.url === "/health") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ status: "ok", service: "devops-cicd-aws-demo" }));
      return;
    }

    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      res.end(
        "<!doctype html><html><head><title>DevOps CI/CD Demo</title></head>" +
        "<body><h1>DevOps CI/CD &amp; AWS Infrastructure Project</h1>" +
        "<p>Node.js demo application is running.</p>" +
        '<p>Health check: <a href="/health">/health</a></p></body></html>'
      );
      return;
    }

    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  createServer().listen(port, "0.0.0.0", () => {
    console.log(`Demo application listening on port ${port}`);
  });
}

module.exports = { createServer };
