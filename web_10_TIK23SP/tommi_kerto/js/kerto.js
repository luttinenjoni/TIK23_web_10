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
    } else {
        resultText = "Väärin. Oikea vastaus oli " + correctAnswer + ". Yritä uudelleen.";
    }

    document.getElementById("result").textContent = resultText;

    // Generoidaan uusi kertolasku seuraavaa kierrosta varten
    correctAnswer = generateQuestion();
}
