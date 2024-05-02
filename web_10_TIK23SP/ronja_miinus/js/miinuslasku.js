function miinusLasku(id) {
    if (id=="kys1" || id=="kys2" || id=="kys3") {
        var numero1 = Math.floor(Math.random() * 10) + 1;
        var numero2 = Math.floor(Math.random() * 10) + 1;
    } else {
        var numero1 = Math.floor(Math.random() * 100);
        var numero2 = Math.floor(Math.random() * 100);
    }
    var kysymys = "Paljonko on " + numero1 + " - " + numero2 + " ?";
    document.getElementById(id).textContent = kysymys;
    return numero1 - numero2;
}

var oikeaVastaus1 = miinusLasku("kys1");
var oikeaVastaus2 = miinusLasku("kys2");
var oikeaVastaus3 = miinusLasku("kys3");
var oikeaVastaus4 = miinusLasku("kys4");
var oikeaVastaus5 = miinusLasku("kys5");
var oikeaVastaus6 = miinusLasku("kys6");
var oikeat = 0;
var kaikki = 0;

function tarkista(vastausId, id, tulosId, buttonId) {
    document.getElementById(buttonId).style.display = "none";
    var vastaus = parseInt(document.getElementById(vastausId).value);
    var tulos = "";

    if (id == "kys1") {oikeaVastaus = oikeaVastaus1;}
    else if (id == "kys2") {oikeaVastaus = oikeaVastaus2;}
    else if (id == "kys3") {oikeaVastaus = oikeaVastaus3;}
    else if (id == "kys4") {oikeaVastaus = oikeaVastaus4;}
    else if (id == "kys5") {oikeaVastaus = oikeaVastaus5;}
    else {oikeaVastaus = oikeaVastaus6;}
    
    if (vastaus == oikeaVastaus) {
        tulos = "Oikein! Hyvä!";
        oikeat = oikeat + 1;
    } else {
        tulos = "Väärin. Oikea vastaus oli " + oikeaVastaus + ".";
    }

    kaikki = kaikki + 1;
    document.getElementById("arvosana").textContent = "Oikeat vastaukset: " + oikeat + "/" + kaikki;
    document.getElementById(tulosId).textContent = tulos;
    localStorage.setItem("miinusTulos",oikeat + "/" + kaikki);
}