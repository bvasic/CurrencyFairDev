var bodyParser = require('body-parser');
var express = require('express');
var server = express();
var form = require('express-form');
var port = process.env.PORT || 1000;
var jsonfile = require('jsonfile');
var filesave = require('fs');
var file = './data/data.json';
var path = require('path');
const MongoClient = require('mongodb').MongoClient

server.set('view engine', 'ejs')

var db

MongoClient.connect('mongodb://admin:LifePlanDb55@cluster0-shard-00-00-b0lmw.mongodb.net:27017,cluster0-shard-00-01-b0lmw.mongodb.net:27017,cluster0-shard-00-02-b0lmw.mongodb.net:27017/lifeplanner?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', (err, database) => {
  if (err) return console.log(err)
  db = database
  server.listen(port, function(){
    console.log("Server running on port "+port);
    });
})

// jsonfile.readFile(file, function(err,obj){
//     console.log(obj);
// });

server.use(bodyParser.urlencoded({extended: true}))
// server.use(express.static(path.join(__dirname, 'public')));
// server.post("/",function(req,res){
//         var jsonRequest = req.body;
//         jsonfile.writeFile(file,JSON.stringify(jsonRequest));
// });
server.get('/', (req, res) => {
  db.collection('persons').find().toArray(function(err, results) {

  res.render('index.ejs', {persons: results})
  // send HTML file populated with quotes here
})
})
server.get('/list', (req, res) => {
  db.collection('persons').find().toArray(function(err, results) {
  console.log(results)
  // send HTML file populated with quotes here
})
})
server.get('/erase', (req,res) => {
    db.collection('persons').remove( { } )
});
server.post('/addperson', function(req,res){
  db.collection('persons').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
