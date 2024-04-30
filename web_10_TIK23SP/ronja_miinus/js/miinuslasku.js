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

function vastaus(vastausId, id, tulosId) {
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
    } else {
        tulos = "Väärin. Oikea vastaus oli " + oikeaVastaus + ". Yritä uudelleen.";
    }

    document.getElementById(tulosId).textContent = tulos;

    if (id == "kys1") {oikeaVastaus1 = miinusLasku(id);}
    else if (id == "kys2") {oikeaVastaus2 = miinusLasku(id);}
    else if (id == "kys3") {oikeaVastaus3 = miinusLasku(id);}
    else if (id == "kys4") {oikeaVastaus4 = miinusLasku(id);}
    else if (id == "kys5") {oikeaVastaus5 = miinusLasku(id);}
    else {oikeaVastaus6 = miinusLasku(id);}

    document.getElementById(vastausId).value = "";
}