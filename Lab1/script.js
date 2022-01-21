function cycle(n) {
    $.ajax({
        type: 'GET',
        url: 'news.json',
        dataType: 'json',
        success: function(data) {
            if (true) {
              setInterval(function() {
                $("#news").fadeOut(500);
                $("#news").fadeIn(750);
                
                setTimeout(function() {
                  for(var i=0; i<5; i++) {
                    if (n >= data.articles.length) {
                      n=0;
                    }
                    var img_loc = "img" + i;
                    img = document.getElementById(img_loc);
                    img.src = data.articles[n].urlToImage;  
                    var title = 'n'+ i;
                    document.getElementById(title).innerHTML = "";
                    var aTag = document.createElement('a');
                    aTag.setAttribute('href',data.articles[n].url);
                    aTag.textContent= data.articles[n].title;
                    aTag.classList.add("title");
                    document.getElementById(title).appendChild(aTag);
    
                    n++;
                    }
                },500)
                    
                
              }, 7000);
            }
            
        },
        error: function(){
            alert('Error: could not make ajax request');
        }
    })
}
cycle(0);
