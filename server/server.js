var bodyParser = require('body-parser');
var express = require('express');
var server = express();
var form = require('express-form');
var port = process.env.PORT || 5555;
var jsonfile = require('jsonfile');
var filesave = require('fs');
var file = './data/data.json';
var path = require('path');
const MongoClient = require('mongodb').MongoClient;

server.use(express.static('public'));
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

var db;

MongoClient.connect('mongodb://admin:LifePlanDb55@cluster0-shard-00-00-b0lmw.mongodb.net:27017,cluster0-shard-00-01-b0lmw.mongodb.net:27017,cluster0-shard-00-02-b0lmw.mongodb.net:27017/lifeplanner?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', (err, database) => {
  if (err) return console.log(err)
  db = database
  server.listen(port, function(){
    console.log("Server running on port "+port);
    });
})

server.use(bodyParser.urlencoded({extended: true}))

//server.use(express.static(path.join(__dirname, 'public')));

//REQUESTS
server.get('/', (req, res) => {
  db.collection('persons').find().toArray(function(err, results) {
  res.render('index.ejs', {persons: results});
  // render EJS template populated with data from MongoDB
})
})

server.get('/list', (req, res) => {
  db.collection('persons').find().toArray(function(err, results) {
  console.log(results);
  // render EJS template populated with data from MongoDB
})
})

server.get('/erase', (req,res) => {
    db.collection('persons').remove( { } )
    res.redirect('/')
});

// RECORD NEW DATA TO MongoDB
server.post('/addperson', function(req,res){
  db.collection('persons').save(req.body, (err, result) => {
    if (err) return console.log(err)
      
    console.log('saved to database')
    res.redirect('/')
  })
})
