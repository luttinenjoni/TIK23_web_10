const button = document.getElementById("button")
var Oikein = document.getElementById("OikeinVaarin").innerHTML
var Vaarin = document.getElementById("OikeinVaarin").innerHTML

// random numero generaattori
function getRandomInt(max) {
    var random = Math.floor(Math.random() * max + 1)
    if (random % 2 === 0) { 
      return random
     } else {
      return random +1
  }}

// kun sivu aukeaa tulee näkyviin randomisti generoitu jakolasku
var randomnro1 = getRandomInt(2);
var nro2 = 2;
document.getElementById('laskut').innerHTML = randomnro1 + " / " + nro2;

// Lista faktoista
var faktat = [
  "Jotkut kilpikonnat kykenevät havaitsemaan maapallon magneettikentän ja käyttämään sitä navigoidessaan pitkillä vaelluksillaan. Tämä on erityisen hyödyllistä niille, jotka vaeltavat merellä.",
  "Tutkimukset ovat osoittaneet, että vesikasvit voivat kommunikoida keskenään kemiallisten aineiden avulla ja jopa tunnistaa sukulaisensa muiden kasvien joukosta.",
  "Elefantit muistavat paikkoja ja yksilöitä vuosikymmenien ajan. Ne pystyvät myös tunnistamaan ihmisiä, joiden kanssa ovat olleet tekemisissä vain kerran vuosien takana.",
  "Tiibetiläiset munkit ovat osoittaneet kykynsä kontrolloida virtsarakon lihaksia niin, että he voivat meditoida ja viettää tunteja yhtäjaksoisesti syvissä keskittymistiloissa ilman tarvetta käydä wc:ssä.",
  "Joissakin paikoissa maailmassa on järvien, kuten Michiganjärven, joissa voi tapahtua luonnollista kaasun vapautumista pohjasta, mikä voi aiheuttaa järvien syttyvän palamaan.",
  "Adolf Hitler valittiin vuonna 1938 Time-lehden vuoden mieheksi ja vuonna 1939 hän oli ehdolla Nobelin rauhanpalkinnon saajaksi",
  "Hurja tanssi alkoi heinäkuussa 1518, kun Rouva Troffea alkoi tanssia hullunlailla Ranskan Strasbourgin kadulla jopa kuutena päivänä viikossa. Viikon kuluessa mukaan oli liittynyt 34 ihmistä ja kuukauden päästä mukana oli noin 400 tanssijaa. Jotkut hurjapäisistä tanssijoista kuolivat lopulta sydänkohtaukseen, aivohalvaukseen tai uupumukseen.",

];

// Valitaan satunnainen indeksi faktalistan pituuden perusteella
var randomIndex = Math.floor(Math.random() * faktat.length);
var pistemaara = 0;

var parasPistemaara = localStorage.getItem("maxPistemaara");
if (parasPistemaara === null) {
    parasPistemaara = 0;
} else {
    parasPistemaara = parseInt(parasPistemaara);
}

// kun painat nappulaa määräytyy laskun vastaus ja oikea tulos
 button.addEventListener('click', () => {
    var vastausInput = parseInt(document.getElementById("vastaus").value)
    var tulos = randomnro1 / nro2

     if (isNaN(pistemaara)) {
      pistemaara = 0; // Jos se on NaN, alusta se nollaksi
  }

    // määrittää oliko vastaajan vastaus oikein vai väärin
    if (vastausInput === tulos) {
    document.getElementById("OikeinVaarin").innerHTML = "Vastasit oikein tässä outo fakta: " + faktat[randomIndex]
    
    // lisätään pistemäärä
    pistemaara += 1;
    if (pistemaara > parasPistemaara) parasPistemaara = pistemaara;
    document.getElementById("pistemaara").innerHTML = "Pistemääräsi: " + pistemaara
    document.getElementById("maxPistemaara").innerHTML = "Paras pistemäärä: " + parasPistemaara;
    

    GeneroiLasku()

       // Jos nykyinen pistemäärä on suurempi kuin paras, päivitetään paras pistemäärä
       if (pistemaara > parasPistemaara) {
        parasPistemaara = pistemaara;
        // Päivitetään paras pistemäärä HTML:ään
        localStorage.setItem("maxPistemaara").innerHTML = "Paras pistemäärä: " + parasPistemaara;
    }

  } else {
    document.getElementById("OikeinVaarin").innerHTML = "Vastauksesi oli valitettavasti väärin... Yritä uudestaan!"
    pistemaara = 0;
    document.getElementById("pistemaara").innerHTML = "Pistemääräsi: " + pistemaara;
  }

localStorage.setItem("maxPistemaara", parasPistemaara)

})

// Generoi uusi lasku
function GeneroiLasku() {
  randomIndex = Math.floor(Math.random() * faktat.length);
  randomnro1 = getRandomInt(2);
  nro2 = 2;
  document.getElementById('laskut').innerHTML = randomnro1 + " / " + nro2;
}

