// server init + mods
var app = require('express')();
const express = require('express');
const app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
const { default: axios } = require('axios');



// server route handler
app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});


app.get('/getByZip/:zipcode', (req, res) => {

  const zip_code = req.params.zipcode;
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