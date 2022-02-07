function getFlavorText(name) {
  var current = window.location.href;
  var url = current + "text/" + name.toLowerCase();

  $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: function(data) {
        console.log(data);
        //alert(data.flavor_text_entries.length);
        var flavor = data.flavor_text_entries[0].flavor_text.replace('', "  ");
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

  var current = window.location.href;
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
      
  function output(){
    var name = document.getElementById('user').value;
    var verb = document.getElementById('verb').value;
    //alert(verb);

    if (verb == 'GET') {
      getPokeData(name);
      getFlavorText(name);
      var pokename = document.getElementById('pokename');
      if (pokename.innerHTML == "") {
        pokename.innerHTML = "POKEMON NOT FOUND IN POKEDEX"
        document.getElementById('pokepic').setAttribute('src','img/pokeball.png');
        document.getElementById('abilities').innerHTML = "Try Searching Again!";
        document.getElementById('measure').innerHTML = "";
        document.getElementById('flavor').innerHTML = "";
        document.getElementById('id_num').innerHTML = "";
      }
    }
    else {
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
        document.getElementById('measure').innerHTML = "";
        document.getElementById('flavor').innerHTML = "";
        document.getElementById('id_num').innerHTML = "";

    }
    
    $("#enter").fadeOut(500);
    setTimeout(function(){
      document.getElementById('enter').style.display = 'none';
    },250);
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