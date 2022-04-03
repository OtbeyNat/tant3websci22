const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tohb:RgvW3UsOM60swhpO@cluster0.o9drm.mongodb.net/lab5?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/* This is where the Angular files live after they are built.  */
app.use(express.static(path.join(__dirname, './d3/dist/d3')));

app.get('/poketypes', function(req, res) {  
  //console.log(req.body);
  client.connect(error => {
    console.log("Connected to MongoDB server...");
    const ids = client.db("lab6").collection("cards");
    ids.find({game: "pokemon"}).sort({id:1}).toArray(function(err, result) {
      console.log("find query executed...");  
      if (result == undefined || result.length == 0) {
        console.log("could not GET document ");
        res.json().status(404);
      }
      data = [{type: "bug", count: 0},{type: "dark", count: 0},{type:"dragon", count: 0}, {type:"electric",count: 0}, {type: "fairy", count: 0},
       {type:"fighting", count: 0}, {type:"fire",count: 0}, {type: "flying",count: 0}, {type: "ghost",count: 0}, {type: "grass",count: 0}, 
        {type: "ground",count: 0}, {type: "ice",count: 0}, {type: "normal",count: 0}, {type: "poison",count: 0}, {type: "psychic",count: 0}, 
        {type: "rock",count: 0}, {type: "steel",count: 0}, {type: "water",count: 0}];
      for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < result[i].types.length; j++) {
          for (var k = 0; k < data.length; k++) {
            if (data[k].type == result[i].types[j]) {
              data[k].count += 1;
            }
          }
        }
      }
      console.log(data);
      res.json(data)
    });
  });
  client.close();
});
app.get('/yugi', function(req, res) {  
  //console.log(req.body);
  client.connect(error => {
    console.log("Connected to MongoDB server...");
    const ids = client.db("lab6").collection("cards");
    ids.find({game:"yugioh"}).sort({name:1}).toArray(function(err, result) {
      console.log("find query executed...");  
      if (result == undefined || result.length == 0) {
        console.log("could not GET document ");
        res.status(404);
      }
      console.log(result);
      if (result == undefined) {res.json({});}
      else {res.json(result);}
    });
  });
  client.close();
});

app.listen(port, () => {
  console.log('Listening on *:3000');
});
