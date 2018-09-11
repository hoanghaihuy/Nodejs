var buffer = new Buffer.from("Hello", "utf-8");

// console.log(buffer.toJSON());

var fs = require("fs");
var content = fs.readFileSync(__dirname + "/text.txt");

console.log(content.toString());
