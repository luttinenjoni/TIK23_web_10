/* yhteenlaskupelin highscore koostesivulle */
window.onload = function(){
    displayHighscore("highscore1", "Helppo: ");
    displayHighscore("highscore2", "Keskitaso: ");
    displayHighscore("highscore3", "Vaikea: ");
    // Tenttien tulokset
    displayHighscore("level1pisteet", "Helppo: ");
    displayHighscore("level2pisteet", "Keskivaikea: ");
    displayHighscore("level3pisteet", "Vaikea: ");
    // Miinus tehtävien tulokset
    displayHighscore("miinusTulos", "Miinus tulokset: ")
}

function displayHighscore(id, prefix) {
    let highScoreElement = document.getElementById(id);
    let highScore = localStorage.getItem(id);

    if (highScore != null) {
        highScoreElement.innerHTML = prefix + highScore;
    } else {
        highScoreElement.innerHTML = prefix + "0";
    }
}

// Local Storage kertolaskuihin
var highscore = parseInt(localStorage.getItem("highscore"));
// Näytä highscore HTML-elementissä
document.getElementById("KertoTulos").textContent = "Kertolaskujen tulos: " + highscore;

// Local Storage kertolaskuihin
var Parastulos = parseInt(localStorage.getItem("maxPistemaara"));
// Näytä highscore HTML-elementissä
document.getElementById("jakoTulos").textContent = "Ennätysmääräsi oikeissa vastauksissa: " + Parastulos;