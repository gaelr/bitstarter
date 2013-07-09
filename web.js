var fs = require("fs");

var file = fs.readFile("./index.html");
// file = file.buf.toString();

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var data = "test";
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
