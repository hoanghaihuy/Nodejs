const http = require("http");
const fs = require("fs");

http
  .createServer(function(req, res) {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // var data = fs.readFileSync(__dirname + "/index.html", "utf-8");
    // data = data.replace("{Name}", "Hoang Hai Huy");
    // res.end(data);

    // fs.createReadStream(__dirname + "./index.html").pipe(res);
    res.writeHead(200, { "Content-Type": "application/json" });

    const person = {
      firstName: "Huy",
      lastName: "Hoang",
      dob: "27/02/1997",
    };

    res.end(JSON.stringify(person));
  })
  .listen(8888);
