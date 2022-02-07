function getFlavorText(name) {
  var last = window.location.href.lastIndexOf("/");
  var current = window.location.href.substring(0,last+1);
  var url = current + "text/" + name.toLowerCase();

  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: function(data) {
        console.log(data);
        //alert(data.flavor_text_entries.length);
        var len = data.flavor_text_entries.length;
        var ran = Math.floor(Math.random() * len);
        while (data.flavor_text_entries[ran].language.name != "en") {
          var ran = Math.floor(Math.random() * len);
        }
        var flavor = data.flavor_text_entries[ran].flavor_text.replace('', "  ");
        document.getElementById('flavor').innerHTML = flavor;
    },
    error: function(msg) {
        // there was a problem
        //alert(msg.status);
    }
});

}

function getPokeData(name) {
  console.log(name)

  var last = window.location.href.lastIndexOf("/");
  var current = window.location.href.substring(0,last+1);
  //alert(current);
  
  var url = current + "pokemon/" + name.toLowerCase();
  //var url = `http://localhost:3000/pokemon/${name}`;
      $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function(data) {
          console.log(data);
          document.getElementById('pokename').innerHTML = data.name;
          document.getElementById('id_num').innerHTML = "id: " + data.id;
          $('#pokepic').attr('src',data.sprites.front_default);
          var height = parseFloat(data.height)/10;
          var weight = parseFloat(data.weight)/10;
          document.getElementById('measure').innerHTML = "HT: " + height + "m |" +  " WT: " + weight + "kg";

          var typediv = document.getElementById('types');
          typediv.innerHTML = "";
          data.types.forEach(element => {
            var t = document.createElement('li');
            t.textContent = element.type.name;
            t.setAttribute("id", element.type.name);
            $('#types').append(t);
          });
          var abilities = document.getElementById('abilities');
          abilities.innerHTML = "Abilities:";
          data.abilities.forEach(element => {
            var t = document.createElement('li');
            t.textContent = element.ability.name;
            $('#abilities').append(t);
          });
      },
      error: function(msg) {
          // there was a problem
          //alert(msg.status);
      }
  });
  }
    
  
  function clear() {
    document.getElementById('pokename').innerHTML = "";
    document.getElementById('types').innerHTML = "";
    document.getElementById('measure').innerHTML = "";
    document.getElementById('flavor').innerHTML = "";
    document.getElementById('id_num').innerHTML = "";
    document.getElementById('abilities').innerHTML = "";
    document.getElementById('pokepic').setAttribute('src','');

  }

  function output(){
    var name = document.getElementById('user').value;
    var verb = document.getElementById('verb').value;
    //alert(verb);

    if (verb == 'GET') {
      getPokeData(name);
      getFlavorText(name);
      setTimeout(function(){
        var pokename = document.getElementById('pokename');
        if (pokename.innerHTML == "") {
          clear();
          pokename.innerHTML = name.toUpperCase() + " NOT FOUND IN POKEDEX"
          document.getElementById('pokepic').setAttribute('src','img/pokeball.png');
          document.getElementById('abilities').innerHTML = "Try Searching Again!";
        }
      },1000)
    }
    else {
      clear();
      var text = document.getElementById('abilities');
      document.getElementById('pokepic').setAttribute('src','img/pokeball.png')
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
    
    $("#enter").fadeOut(1000);
    setTimeout(function(){
      document.getElementById('enter').style.display = 'none';
    },750);
    setTimeout(function(){
      $("#info").fadeIn(1000);
      document.getElementById('info').style.display = 'block';
    },1000)
 
  };

  function reset() {
    document.getElementById('user').value = "";
    clear();
    $("#info").fadeOut(2000);
    setTimeout(function(){
      document.getElementById('info').style.display = 'none';
    },2250);
    $("#enter").fadeIn(1000);
    document.getElementById('enter').style.display = 'block';    
  };
