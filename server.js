/*jshint esversion: 6*/
const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const app = express();

var buzzwordArray= [];

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('./public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/buzzwords', function(req, res, next){
  res.json({'buzzword': buzzwordArray});
});

app.post('/buzzword', function(req, res, next){
  buzzwordArray.push(req.body);
  res.json({'success': 'true'});
  console.log(req.body);
  console.log(req.body.buzzword);
  console.log(req.body.points);
});

app.put('/buzzword', function(req, res, next){
  for (var i = 0; i < buzzwordArray.length; i++) {
    if (req.body.buzzword === buzzwordArray[i].buzzword){
      let buzzwordArrayPoints = parseInt(buzzwordArray[i].points);
      let buzzwordReqPoints = parseInt(req.body.points);
      buzzwordArray[i].heard = true;
      console.log(buzzwordArray[i].heard);
      buzzwordArray[i].points = buzzwordArrayPoints + buzzwordReqPoints;
      console.log(buzzwordArray[i].points);
      res.json({'success': true, 'newScore': buzzwordArray[i].points});
    } else {
      res.json({'success': false});
    }
  }
});

app.delete('/buzzword', function(req, res, next){
  for (var i = 0; i < buzzwordArray.length; i++) {
    if (req.body.buzzword === buzzwordArray[i].buzzword){
      buzzwordArray.splice(i, 1, 0);
      res.json({'success': true});
    }
  }
});

app.post('/reset', function(req, res, next){
  buzzwordArray = [];
  res.json({'success': true});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});