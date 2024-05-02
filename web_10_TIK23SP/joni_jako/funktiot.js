const button = document.getElementById("button")

// random numero generaattori
function getRandomInt(max) {
    var random = Math.floor(Math.random() * max + 1)
    if (random % 2 === 0) { 
      return random
     }else{
      return random +1
  }}

  // kun sivu aukeaa tulee näkyviin randomisti generoitu jakolasku
  var randomnro1 = getRandomInt(50);
  var nro2 = 2;
  document.getElementById('laskut').innerHTML = randomnro1 + " / " + nro2;

// kun painat nappulaa määräytyy laskun vastaus ja oikea tulos
 button.addEventListener('click', () =>
  {
    var vastausInput = parseInt(document.getElementById("vastaus").value)
    var tulos = randomnro1 / nro2
    //määrittää oliko vastaajan vastaus oikein vai väärin
    if (vastausInput === tulos) {
      alert("Oikein");
  } else {
      alert("Väärin");
  }
  
});