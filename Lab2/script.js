

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


function output(api) {
    $.getJSON(api, function(data) {
        //var y = document.getElementById("json");
        //y.innerHTML = JSON.stringify(data);
        document.getElementById("name").innerHTML = JSON.stringify(data.name).substr(1).slice(0,-1);
        document.getElementById("weather").innerHTML = JSON.stringify(data.weather[0].description).substr(1).slice(0,-1);
        document.getElementById("temp").innerHTML = "Temp: " + JSON.stringify(data.main.temp) + " F";
        document.getElementById("feels").innerHTML = "Feels Like: " + JSON.stringify(data.main.feels_like) + " F";
        
        var feel = parseInt(JSON.stringify(data.main.feels_like));
        if (feel <= 32) {
            //freezing
        }
        else if (feel <= 65) {
            //chilly
        }
        else{
            //warm
        }

        var icon = JSON.stringify(data.weather[0].icon).substr(1).slice(0,-1);
        var imglink = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        $("#wimg").attr("src", imglink);
        document.body.style.backgroundImage = "url(" + imglink + ")";
        var wind = parseInt(JSON.stringify(data.wind.speed));
        var windout = JSON.stringify(data.wind.speed) + " mph<br>";
        if (wind <= 10) {windout += "calm winds";}
        else if (wind <= 20) {windout += "moderate breeze";}
        else {windout += "strong winds";}
        document.getElementById("wind").innerHTML = windout;
        console.log(data);
    });
}

function town() {
    document.getElementById("pos").innerHTML = "";
    var t = document.getElementById("town");
    var input = t.value;
    var call = 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=imperial&appid=fd7c53a14632ff8001f677176d7ca856';
    output(call);
}