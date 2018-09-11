var express = require("express");
var app = express();

var server = require("http").createServer(app);

server.listen(8888);

app.get("/", function(req, res) {
  //   res.send("<h1><font color=red>Hello World</font></h1>");
  res.sendFile(__dirname + "/index.html");
});

app.get("/introduction.html", function(req, res) {
  res.send("<h1><font color=blue>THIS IS INTRODUCTION</font></h1>");
});

app.get("/sum/:x/:y", function(req, res) {
  var x = parseInt(req.params.x);
  var y = parseInt(req.params.y);
  var sum = x + y;
  res.send(
    "<h1><font color=red>RESULT OF " +
      x +
      " + " +
      y +
      " = " +
      sum +
      "</font></h1>",
  );
});
