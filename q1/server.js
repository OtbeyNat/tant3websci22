// server init + mods
const express = require('express');
const app = express();
var http = require('http').Server(app);
const { default: axios } = require('axios');
const apiKey = "d27c6a10c5107fa135a3ffbba98b99d5";
const cors = require('cors');
const bodyParser = require('body-parser');
const querystring = require('querystring');


app.use(cors({
  origin: ['http://localhost:3000'],
  methods: [
      "GET","POST"
  ],
  credentials: true
}));

// server route handler
app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});

app.get('/wind', (req, res) => {

    // Make a request for a user with a given ID
  
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=12180&units=imperial&appid=${apiKey}`;
  
    axios.get(url)
      .then(e => {
        // console.log(e.data)
        res.send(e.data)
      })
      .catch(err =>{
        console.log(err)
      })
  });

app.post('/temperature?zip=:zipcode', (req, res) => {

  const zip_code = req.query.zip;
  // Make a request for a user with a given ID

  let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip_code}&units=imperial&appid=${apiKey}`;

  axios.get(url)
    .then(e => {
      // console.log(e.data)
      res.send(e.data)
    })
    .catch(err =>{
      console.log(err)
    })
});


// start server
http.listen(3000, function(){
  console.log('Server up on *:3000');
});