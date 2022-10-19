

$(document).ready(function () {

  $('#select').change(function () {

    var es = document.getElementById('select');

    esValor = es.options[es.selectedIndex].value;
    console.log(esValor);

    if (esValor == 2 ) {
      document.getElementById("text-Portugues").style.display = "block";
      document.getElementById("text-Ingles").style.display = "none";
      document.getElementById("text-Espanhol").style.display = "none";
    }
    if (esValor == 0) {
      document.getElementById("text-Portugues").style.display = "none";
      document.getElementById("text-Ingles").style.display = "block";
      document.getElementById("text-Espanhol").style.display = "none";
    }
    if (esValor == 1) {
      document.getElementById("text-Portugues").style.display = "none";
      document.getElementById("text-Ingles").style.display = "none";
      document.getElementById("text-Espanhol").style.display = "block";
    }
  });

});






