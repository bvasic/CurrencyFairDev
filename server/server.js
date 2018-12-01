var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 1000;
var jsonfile = require('jsonfile');
var filesave = require('fs');
var file = './data/data.json';

jsonfile.readFile(file, function(err,obj){
    console.log(obj);
});

server.use(bodyParser.json());
server.post("/",function(req,res){
        var jsonRequest = req.body;
        jsonfile.writeFile(file,JSON.stringify(jsonRequest));
});
server.get("/",function(req,res){
    jsonfile.readFile(file, function read(err, data) {
        if (err) {
            throw err;
        }
        var content = data;
        res.json(content);
    });    
});


server.listen(port, function(){
    console.log("Server running on port "+port);
});