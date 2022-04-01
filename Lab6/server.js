// server init + mods
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const express = require('express');
const path = require('path');
const app = express();
var http = require('http').Server(app);
const { default: axios } = require('axios');
app.use(express.static(path.join(__dirname, './deck/dist/deck')));

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tohb:RgvW3UsOM60swhpO@cluster0.o9drm.mongodb.net/lab5?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function mongo_y() {
    client.connect(error => {
        console.log("Connected to MongoDB server...");
        const col = client.db("lab6").collection("cards");
        let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Synchro%20Monster';

        axios.get(url).then(yugi => {
            var cards = yugi.data.data;
            for (var i = 0; i<100; i++) {
                var card = cards[i];
                var obj = {game: "yugioh", id: card.id, name: card.name, atk: card.atk, def: card.def};
                if (card.archetype == null) {obj["archetype"] = card.race;}
                else {obj["archetype"] = card.archetype;}
                obj["url"] = card.card_images[0].image_url;
                console.log(obj);
                col.insertOne(obj).then(function(d) {
                    //console.log("document inserted");
                })
            } 
        }).catch(err => {
            if(err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
            }
        });

        
    });
    return;
}

async function mongo_p() {
    client.connect(error => {
        console.log("Connected to MongoDB server...");
        const col = client.db("lab6").collection("cards");
        for (var i = 1; i<152; i++) {
            let url = 'https://pokeapi.co/api/v2/pokemon/' + i;
            axios.get(url).then(pokemon => {
                //console.log("id: " + pokemon.data.id + " | " + pokemon.data.name);
                var obj = {game: "pokemon", id:pokemon.data.id, name:pokemon.data.name, atk:pokemon.data.stats[1].base_stat, def:pokemon.data.stats[0].base_stat, archetype: null};
                obj["url"] = pokemon.data.sprites.other.home.front_default;
                console.log(obj);
                col.insertOne(obj).then(function(d) {
                //console.log("document inserted");
                })
            }).catch(err => {
                if(err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                }
            });
        } 
    });
    return;
}

async function mongo_m() {
    client.connect(error => {
        console.log("Connected to MongoDB server...");
        const col = client.db("lab6").collection("cards");
        let url = 'https://api.magicthegathering.io/v1/cards/?types=creature';
            axios.get(url).then(magic => {
                //console.log(magic.data.cards[0]);
                for (var i = 0; i<100; i++) {
                    var m = magic.data.cards[i];
                    var obj = {game: "magicthegathering", id:m.multiverseid, name:m.name, atk:m.power, def:m.toughness, archetype: m.type, url: m.imageUrl};
                    if (obj["url"] == null) {obj["url"] = "";}
                    console.log(obj);
                    col.insertOne(obj).then(function(d) {
                    //console.log("document inserted");
                    })
                } 
                
            }).catch(err => {
                if(err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                }
            });
    });
    return;
}

async function mongo_h() {
    client.connect(error => {
        console.log("Connected to MongoDB server...");
        const col = client.db("lab6").collection("cards");
        let url = 'https://api.hearthstonejson.com/v1/134558/enUS/cards.collectible.json';
            axios.get(url).then(hearth => {
                for (var i = x = 0; x<100; i++) {
                    var h = hearth.data[i];
                    if (h.type != "MINION") {continue;}
                    var obj = {game: "hearthstone", id:h.dbfid, name:h.name, atk:h.attack, def:h.health, archetype: h.cardClass, url: "https://art.hearthstonejson.com/v1/orig/"+h.id+".png"};
                    x++;
                    console.log(obj);
                    col.insertOne(obj).then(function(d) {
                    //console.log("document inserted");
                    })
                } 
                
            }).catch(err => {
                if(err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                }
            });
    });
    return;
}

async function addyugi() {
    await mongo_y();
    client.close()
}

async function addpokemon() {
    await mongo_p();
    client.close();
}

async function addmagic() {
    await mongo_m();
    client.close();
}

async function addhearth() {
    await mongo_h();
    client.close();
}
//PART1 ADDING DOCUMENTS TO COLLECTION 
//addyugi();
// addpokemon();
// addmagic();
// addhearth();



app.get('/card/:id', function(req, res) {  
    //console.log(req.body);
    client.connect(error => {
      console.log("Connected to MongoDB server...");
      const ids = client.db("lab6").collection("cards");
      ids.find({id: parseInt(req.params.id)}).toArray(function(err, result) {
        console.log("find query executed...");  
        if (result == undefined || result.length == 0) {
          console.log("could not GET document ");
          res.status(404);
        }
        console.log(result);
        if (result == undefined) {res.json({});}
        else {res.json(result[0]);}
        
      });
    });
    client.close();
});

app.post('/card',jsonParser, function(req, res) {
    //DOCUMENT TO ADD WITH DATA IN THE BODY OF POST REQUEST
    var obj = req.body;
    obj["id"] = parseInt(obj["id"]);
    delete obj['method'];
    if (obj["id"] == null) {obj["id"] = -1;}
    if (obj["name"] == null) {obj["id"] = "unknown";}
    if (obj["atk"] == null) {obj["atk"] = -1;}
    if (obj["def"] == null) {obj["def"] = -1;}
    if (obj["archetype"] == null) {obj["archetype"] = "unknown";}
    if (obj["url"] == null || obj["url"] == "") {obj["url"] = "https://upload.wikimedia.org/wikipedia/commons/3/33/White_square_with_question_mark.png";}
    console.log(obj);


    client.connect(error => {
        console.log("Connected to MongoDB server...");
        const ids = client.db("lab6").collection("cards");
        ids.insertOne(obj).then(function(d) {
        console.log("document inserted");
        res.json(obj).status(201);
    }).then(function(){client.close();})
    });
});

app.put('/card/:id',jsonParser, function(req, res) {  
    //UPDATE EXISTING DCUMENTS -- DESIRED CHANGES SPECIFIED IN THE BODY OF PUT REQ
    client.connect(error => {
      console.log("Connected to MongoDB server...");
      const ids = client.db("lab6").collection("cards");
      var change = {$set: req.body}
      ids.updateOne({id: parseInt(req.params.id)},change).then(function(obj) {
        console.log(obj);
        if(obj.modifiedCount == 0) {
          res.status(404).json({message: "document with id "+req.params.id+" not found"});
        }
        else {res.json(obj);}
      }).then(function() {
        client.close();
      })
    });
});

app.delete('/card/:id', function(req, res) {  
    //ALLOW TO DELETE AN EXISTING DOCUMENT -- DONT NEED A BODY
    client.connect(error => {
        console.log("Connected to MongoDB server...");
        const ids = client.db("lab6").collection("cards");
        ids.deleteOne({id: parseInt(req.params.id)}).then(function(obj) {
            console.log(obj);
            res.json(obj);
        }).then(function() {
            client.close();
        })
    });
});

// start server
http.listen(3000, function(){
  console.log('Server up on *:3000');
});