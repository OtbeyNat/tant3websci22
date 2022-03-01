function getLocation() {
    
    navigator.geolocation.getCurrentPosition(function (position) {
      var long = position.coords.longitude;
      var lat = position.coords.latitude;
      document.getElementById("pos").innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
      
      
      var call = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=imperial&appid=fd7c53a14632ff8001f677176d7ca856';
      output(call);

    },function(x){
        alert("Location could not be found: Allow Location or enter a town!");
    });
  } 


// function output(api) {
//     $.getJSON(api, function(data) {
//         //var y = document.getElementById("json");
//         //y.innerHTML = JSON.stringify(data);
//         document.getElementById("name").innerHTML = JSON.stringify(data.name).substr(1).slice(0,-1);
//         document.getElementById("weather").innerHTML = JSON.stringify(data.weather[0].description).substr(1).slice(0,-1);
//         document.getElementById("temp").innerHTML = "Temp: " + JSON.stringify(data.main.temp) + " F";
//         document.getElementById("feels").innerHTML = "Feels Like: " + JSON.stringify(data.main.feels_like) + " F";
//         var icon = JSON.stringify(data.weather[0].icon).substr(1).slice(0,-1);
//         var imglink = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
//         $("#wimg").attr("src", imglink);
//         document.body.style.backgroundImage = "url(" + imglink + ")";
//         var wind = parseInt(JSON.stringify(data.wind.speed));
//         var windout = JSON.stringify(data.wind.speed) + " mph<br>";
//         if (wind <= 10) {windout += "calm winds";}
//         else if (wind <= 20) {windout += "moderate breeze";}
//         else {windout += "strong winds";}
//         document.getElementById("wind").innerHTML = windout;
//         console.log(data);
//     });
// }
function windy() {
    var url = `http://localhost:3000/wind`;
        $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data) {
            console.log(data);
            document.getElementById("name").innerHTML = JSON.stringify(data.name).substr(1).slice(0,-1);
            document.getElementById("weather").innerHTML = JSON.stringify(data.wind.speed) + " mph";
        },
        error: function(msg) {
            // there was a problem
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });
}

function zip() {
    var t = document.getElementById("zip");

    var url = `http://localhost:3000/temperature/?zip=${t}`;
        $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        success: function(data) {
            console.log(data);
            document.getElementById("name").innerHTML = JSON.stringify(data.name).substr(1).slice(0,-1);
            document.getElementById("weather").innerHTML = JSON.stringify(data.weather[0].description).substr(1).slice(0,-1);
            document.getElementById("temp").innerHTML = "Temp: " + JSON.stringify(data.main.temp) + " F";
            document.getElementById("feels").innerHTML = "Feels Like: " + JSON.stringify(data.main.feels_like) + " F";
            var icon = JSON.stringify(data.weather[0].icon).substr(1).slice(0,-1);
            var imglink = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            $("#wimg").attr("src", imglink);
            document.body.style.backgroundImage = "url(" + imglink + ")";
            var t = parseInt(JSON.stringify(data.main.temp));

            var text = document.getElementById("wind");
            if (t < 33) {
                text.innerHTML = "Freezing";
                text.style.color = "blue";
            }
            else if (t >= 33 && t <= 50) {
                text.innerHTML = "Cold";
                text.style.color = "Green";
            }
            else if (t > 80) {
                text.innerHTML = "Hot";
                text.style.color = "Red";
            }
        },
        error: function(msg) {
            // there was a problem
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });
}

