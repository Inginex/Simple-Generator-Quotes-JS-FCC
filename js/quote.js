$(document).ready(function() {
    function getQuote() {

      // Contem as frases // The phrases
        var quotes = [
          "I am Batman !", 
          "D'oh!", 
          "El Barto.", 
          "The Bomb has been Planted.", 
          "Cowabunga!", 
          "It's the End."
        ];
      

      // Contem os autores // The authors
        var author = [
          "Batman:", 
          "Homer Simpson:", 
          "Bart Simpson:", 
          "CS-Terrorist:", 
          "TMNT:", 
          "Dante Sparda:"
        ];
      

      // Imagens que irão aparecer // Images which will appears
      var img = [
                 "https://imgflip.com/readImage?iid=37099780",
                 "http://quib.ly/media/admin_upload/Homer_simpsonwoohooo.gif",
                 "http://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Bart-Simpson-01-icon.png", 
                 "http://oi67.tinypic.com/2e5tysh.jpg",
                 "http://1.bp.blogspot.com/-Msti8SSpsTk/TeT-lfVp8ZI/AAAAAAAAA-w/NDUiJzzyCQ0/s1600/tmnt-731217.jpg",
                 "http://i.imgur.com/naGbQ4K.png"
                ];

      // As cores dos botões  //  Colors of buttons       
      var btn = [
                  "#381390", 
                  "#FED420", 
                  "#FED420", 
                  "#63473C", 
                  "green", 
                  "#803534"
                ];

      // As cores do background // Colors of the background         
      var bg = [
                  "#381390", 
                  "#FED420", 
                  "#FED420", 
                  "#63473C", 
                  "green", 
                  "#803534"
               ];
      
        // Cria a lista randomica para selecionar os itens // Create a randomic list for select the items
		    var randNum = Math.floor(Math.random() * quotes.length);
        var randQuote = quotes[randNum];
        var randAuthor = author[randNum];
        var randImg = img[randNum];
        var randBtn = btn[randNum];
        var randBg = bg[randNum];
      

       // Mostra os itens selecionados randomicamente // Show the random items selected
        $(".quote").text(randQuote);
        $(".author").text(randAuthor);
        $(".img").attr('src', randImg);
        $(".btn").css("background-color", randBtn).css("border", "none");
        $("body").css("background-color", randBg);
    }

    //Gera uma nova lista a cada clique // Generate a new list with each click
    $(".btn").on("click", getQuote);
});
