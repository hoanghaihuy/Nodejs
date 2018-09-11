var http = require("http");

http
  .createServer(function(req, res) {
    res.writeHeade(200, { "Content-Type": "text/plain" });
    res.end("Hoang Hai Huy");
  })
  .listen(8888);
