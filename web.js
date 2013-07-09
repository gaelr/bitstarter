var fs = require("fs");

var file = fs.readFileSync("./index.html");
var data = file.toString();

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
