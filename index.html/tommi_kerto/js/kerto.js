// Alustetaan highscore
var highscore = 0;

// Funktio, joka arpoo kertolaskun ja näyttää sen käyttäjälle
function generateQuestion() {
    var number1 = Math.floor(Math.random() * 10) + 1; // Satunnainen luku välillä 1-10
    var number2 = Math.floor(Math.random() * 10) + 1; // Satunnainen luku välillä 1-10
    var questionText = "Paljonko on " + number1 + " * " + number2 + " ?";
    document.getElementById("question").textContent = questionText;
    return number1 * number2; // Palautetaan oikea vastaus
}

// Alustetaan kertolasku, kun sivu latautuu
var correctAnswer = generateQuestion(); // Haetaan oikea vastaus

// Funktio, joka tarkistaa vastauksen
function checkAnswer() {
    var userAnswer = parseInt(document.getElementById("answer").value);
    var resultText = "";
    localStorage.setItem("highscore",highscore); //highscoren tallennus!!
    
    if (userAnswer === correctAnswer) {
        resultText = "Oikein! Hyvä!";
        // Päivitetään highscore, jos vastaus on oikein
        highscore += 1; // Voit säätää pisteytystä tarpeesi mukaan
        document.getElementById("highscore").textContent = "Hienoa! Olet vastannut näin moneen kysymykseen oikein: " + highscore;
    } else {
        resultText = "Väärin. Oikea vastaus oli " + correctAnswer + ". Yritä uudelleen.";
        // Nollataan highscore väärästä vastauksesta
        
    }

    document.getElementById("result").textContent = resultText;

    // Tyhjennetään vastauskenttä
    document.getElementById("answer").value = "";

    // Generoidaan uusi kertolasku seuraavaa kierrosta varten
    correctAnswer = generateQuestion();
}

//highscoren tallennus
window.onload = function(){
    let scoreFromBrowser = localStorage.getItem("highscore");
    if (scoreFromBrowser != undefined) highscore = scoreFromBrowser; 
    document.getElementById("highscore").innerHTML = "Paras tuloksesi: " + highscore;
    document.getElementById("nappi-div").disabled = true;
}

window.onload = function() {
    let scoreFromBrowser = localStorage.getItem("highscore");

    // Tarkistetaan, että scoreFromBrowser on olemassa ja ei ole tyhjä merkkijono
    if (scoreFromBrowser !== null && scoreFromBrowser !== "") {
        highscore = parseInt(scoreFromBrowser); // Muunnetaan tallennettu arvo numeroksi
    }

    // Päivitetään näyttö tallennetulla highscorella
    document.getElementById("highscore").innerHTML = "Hienoa! Olet vastannut näin moneen kysymykseen oikein: " + highscore;
}







