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
      
  function output(){
    var a = document.getElementById('user').value;
    $("#enter").fadeOut(500);
    setTimeout(function(){
      document.getElementById('enter').style.display = 'none';
    },500);
    $("#info").fadeIn(500);
    document.getElementById('info').style.display = 'block';
  };

  function reset() {
    $("#info").fadeOut(500);
    setTimeout(function(){
      document.getElementById('info').style.display = 'none';
    },500);
    $("#enter").fadeIn(500);
    document.getElementById('enter').style.display = 'block'; 
  };