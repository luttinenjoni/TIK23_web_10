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
    
    if (userAnswer === correctAnswer) {
        resultText = "Oikein! Hyvä!";
        // Päivitetään highscore, jos vastaus on oikein
        highscore += 1; // Voit säätää pisteytystä tarpeesi mukaan
        document.getElementById("highscore").textContent = "Highscore: " + highscore;
    } else {
        resultText = "Väärin. Oikea vastaus oli " + correctAnswer + ". Yritä uudelleen.";
        // Nollataan highscore väärästä vastauksesta
        highscore = 0;
        document.getElementById("highscore").textContent = "Highscore: " + highscore;
    }

    document.getElementById("result").textContent = resultText;

    // Tyhjennetään vastauskenttä
    document.getElementById("answer").value = "";

    // Generoidaan uusi kertolasku seuraavaa kierrosta varten
    correctAnswer = generateQuestion();
}



