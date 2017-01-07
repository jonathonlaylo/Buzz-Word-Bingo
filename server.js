/*jshint esversion: 6*/
const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');

var app = express();
var buzzwordArray= [];
var points = 0;

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('./public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/buzzwords', function(req, res, next){
  res.json({"buzzword": buzzwordArray});
});

app.post('/buzzword', function(req, res){
  //testing req.body
  console.log(req.body);

});

app.put('/buzzword', function(req, res, next){

});

app.delete('/buzzword', function(req, res, next){

});

app.post('/rest', function(req, res){

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});