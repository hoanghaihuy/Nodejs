var http = require("http");
var dt = require("./myFirstModule.js");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("The date and time are currently: " + dt.myDateTime());
  })
  .listen(8080);
