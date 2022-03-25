// server init + mods
const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, './lab4/dist/lab4')));
var http = require('http').Server(app);
const { default: axios } = require('axios');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tohb:RgvW3UsOM60swhpO@cluster0.o9drm.mongodb.net/lab5?retryWrites=true&w=majority";

// client.connect(err => {
//   const collection = client.db("lab5").collection("pokemon");
//   // perform actions on the collection object
//   client.close();
// });

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/db', function(req, res) {
  //GET ALL DOCUMENTS
  client.connect(err => {
    console.log("Connected to MongoDB server...");
    const ids = client.db("lab5").collection("pokemon");
    ids.find({}).sort({id: 1}).toArray(function(err, result) {
          console.log("find query executed...");  
          //console.log(result);
          res.json(result);
    });
  });
  client.close();
});

app.get('/db/:number', function(req, res) {  
  //GET DOCUMENT CORRESPONDING TO NUMBER
  
  client.connect(error => {
    console.log("Connected to MongoDB server...");
    const ids = client.db("lab5").collection("pokemon");
    ids.find({id: parseInt(req.params.number)}).toArray(function(err, result) {
      console.log("find query executed...");  
      if (result == undefined || result.length == 0) {
        console.log("could not not GET document with id "+req.params.number);
        res.status(404);
      }
      console.log(result);
      res.json(result);
    });
  });
  client.close();
});

app.post('/db',jsonParser, function(req, res) {
  //DOCUMENT TO ADD WITH BE IN THE BODY OF POST REQUEST
  client.connect(error => {
    console.log("Connected to MongoDB server...");
    const ids = client.db("lab5").collection("pokemon");
    ids.find().sort({id:-1}).limit(1).toArray().then(function(m) {
      ids.countDocuments({}).then(function(numDoc) {
        console.log(numDoc+1);
        var doc = {id: parseInt(numDoc)+1, name: req.body.name};
        ids.insertOne(doc).then(function(d) {
          console.log("document inserted");
          res.status(201).json(doc);
        }).then(function(){
          client.close();
        })
      })
    })
  });
});

app.post('/db/:number', function(req, res) {
  //ERROR
  client.connect(error => {
    res.status(403).json({message: "Action Not Allowed"});
  });
  client.close();
});

app.put('/db',jsonParser, function(req, res) {
  //BULK UPDATE ALL DOCUMENTS IN COLLECTION
  client.connect(error => {
    console.log("Connected to MongoDB server...");
    const ids = client.db("lab5").collection("pokemon");
    var change = {$set: {name: req.body.name}}
    ids.updateMany({},change).then(function(obj) {
      console.log(obj);
      res.json(obj);
    }).then(function() {
      client.close();
    })
  });
});

app.put('/db/:number',jsonParser, function(req, res) {  
  //UPDATE EXISTING DCUMENTS -- DESIRED CHANGES SPECIFIED IN THE BODY OF PUT REQ
  client.connect(error => {
    console.log("Connected to MongoDB server...");
    const ids = client.db("lab5").collection("pokemon");
    var change = {$set: {name: req.body.name}}
    ids.updateOne({},change).then(function(obj) {
      console.log(obj);
      if(obj.modifiedCount == 0) {
        res.status(404).json({message: "document with id "+req.params.number+" not found"});
      }
      res.json(obj);
    }).then(function() {
      client.close();
    })
  });
});

app.delete('/db', function(req, res) {
  //MASS DELETE ALL DOCUMENTS IN COLLECTION
  client.connect(error => {
    console.log("Connected to MongoDB server...");
    const ids = client.db("lab5").collection("pokemon");
    ids.deleteMany().then(function(obj) {
      console.log(obj);
      res.json(obj);
    }).then(function() {
      client.close();
    })
  });
});

app.delete('/db/:number', function(req, res) {  
  //ALLOW TO DELETE AN EXISTING DOCUMENT -- DONT NEED A BODY
  client.connect(error => {
    console.log("Connected to MongoDB server...");
    const ids = client.db("lab5").collection("pokemon");
    ids.deleteOne({id: parseInt(req.params.number)}).then(function(obj) {
      console.log(obj);
      res.json(obj);
    }).then(function() {
      client.close();
    })
  });
});


// server route handler
app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});

app.get('/pokemon/:name', (req,res) => {
  const pokemon = req.params.name;
  
  let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;
  axios.get(url)
    .then(e => {
      res.send(e.data);
      console.log(e.status);
    })
    .catch(err => {
      //console.log(err);
      if(err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
      }
    })
});

app.get('/text/:name', (req,res) => {
  const pokemon = req.params.name;
  
  let url = 'https://pokeapi.co/api/v2/pokemon-species/' + pokemon;
  axios.get(url)
    .then(e => {
      res.send(e.data);
      console.log(e.status);
    })
    .catch(err => {
      console.log(err);
      if(err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
      }
    })
});

// start server
http.listen(3000, function(){
  console.log('Server up on *:3000');
});