$(function() {
    $('#sino').on('click', function(){
        text = "日本語の文章が入ります";
        swapText(text);
    });
  });

  function swapText(text){
    document.getElementById('named').innerHTML = text;
   }