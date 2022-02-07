/*
function getWeatherByZip( zip ) {
    console.log(zip)

    var url = `http://localhost:3000/getByZip/${zip}`

        $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data) {
            console.log(data);
            $('#messages').append($('<li>').text(`Weather: ${data.main.temp}°F - ${data.weather[0].description}`));
            $('#messages li').last().css("color", "green");
        socket.emit('message', `Weather: ${data.main.temp}°F - ${data.weather[0].description}`);
        },
        error: function(msg) {
            // there was a problem
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });
    }
*/
function getPokeData(name) {
  console.log(name)

  var url = `http://localhost:3000/pokemon/${name}`;
      $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function(data) {
          console.log(data);
          document.getElementById('pokename').innerHTML = data.name;
          var typediv = document.getElementById('types');
          typediv.innerHTML = "";
          data.types.forEach(element => {
            var t = document.createElement('li');
            t.textContent = element.type.name;
            t.setAttribute("id", element.type.name);
            $('#types').append(t);
          });
          $('#pokepic').attr('src','https://img.pokemondb.net/artwork/' + data.name + '.jpg');
      },
      error: function(msg) {
          // there was a problem
          document.getElementById('pokename').innerHTML = msg.status + ' ' + msg.statusText;
      }
  });
  }
      
  function output(){
    var name = document.getElementById('user').value;
    var verb = document.getElementById('verb').value;
    //alert(verb);

    if (verb == 'GET') {
      getPokeData(name);
    }
    else {
      var text = document.getElementById('text')
      document.getElementById('pokepic').setAttribute('src','img/pikachu.png')
      if (verb == 'POST') {
        text.innerHTML = "POST " + name + " IS NOT AVAILABLE YET";
      };
      if (verb == 'PUT') {
        text.innerHTML = "PUT " + name + " IS NOT AVAILABLE YET";
      };
      if (verb == 'DELETE') {
        text.innerHTML = "DELETE " + name + " IS NOT AVAILABLE YET";
      };
    }
    

    $("#enter").fadeOut(500);
    setTimeout(function(){
      document.getElementById('enter').style.display = 'none';
    },500);
    $("#info").fadeIn(500);
    document.getElementById('info').style.display = 'block';
  };

  function reset() {
    document.getElementById('user').value = "";
    $("#info").fadeOut(500);
    setTimeout(function(){
      document.getElementById('info').style.display = 'none';
    },500);
    $("#enter").fadeIn(500);
    document.getElementById('enter').style.display = 'block'; 
    
    setTimeout(function(){
      document.getElementById('pokepic').setAttribute('src','');
      document.getElementById('pokename').innerHTML = "";
      document.getElementById('types').innerHTML = "";
    },500)
    
  };