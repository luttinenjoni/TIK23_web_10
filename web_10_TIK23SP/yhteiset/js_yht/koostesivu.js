



/* yhteenlaskupelin highscore koostesivulle */
window.onload = function(){
    displayHighscore("highscore1", "Helppo: ");
    displayHighscore("highscore2", "Keskitaso: ");
    displayHighscore("highscore3", "Vaikea: ");
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