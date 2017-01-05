/*jshint esversion: 6*/
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.get('/', function(req, res){
  res.send('hello world!');
    if(req.url === '/'){
    req.url = '/index.html';
  }
});

app.get('/buzzwords', function(req, res){

});

app.post('/buzzwords', function(req, res){

});

app.put('/buzzwords', function(req, res){

});

app.delete('/buzzwords', function(req, res){

});

app.post('/rest', function(req, res){

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});