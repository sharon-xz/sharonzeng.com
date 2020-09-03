"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var path = require('path'); // const handleMessage = require('./sendMessage');


var app = express();
var port = process.env.PORT || 5000;
app.use(express["static"](path.join(__dirname, 'client', 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/api/hello', function (req, res) {
  res.send({
    express: 'Hello From Express'
  });
});
app.post('/api/world', function (req, res) {
  console.log(req.body);
  res.send("I received your POST request. This is what you sent me: ".concat(req.body.post));
}); // app.post('/api/message', handleMessage);

app.listen(port, function () {
  return console.log("Listening on port ".concat(port));
});
