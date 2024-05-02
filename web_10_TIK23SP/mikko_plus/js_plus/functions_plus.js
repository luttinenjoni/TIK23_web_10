let timeLeft = 10; // ajan asetus 1/3
let timerInterval
let score = 0;
let highScore = 0;
let correctAnswer = 0;

//highscoren tallennus
window.onload = function(){
    let scoreFromBrowser = localStorage.getItem("highscore");
    if (scoreFromBrowser != undefined) highScore = scoreFromBrowser; 
    document.getElementById("highscore").innerHTML = "Paras tuloksesi: " + highScore;
    document.getElementById("nappi-div").disabled = true;
}

// nappeja ei voi painaa
document.getElementById("btn1").disabled = true;
document.getElementById("btn2").disabled = true;
document.getElementById("btn3").disabled = true;
document.getElementById("btn4").disabled = true;


function startGame(){
    
    nextQuestion();

    document.getElementById("startBtn").disabled = true;

    let timeDisplay = document.getElementById("timeDisplay");
    timerInterval = setInterval(function(){
        timeLeft -= 1;

        timeDisplay.innerHTML = "Aikaa jäljellä: " + timeLeft;
        if (timeLeft == 0)
        {
            clearInterval(timerInterval);

            document.getElementById("btn1").disabled = true;
            document.getElementById("btn2").disabled = true;
            document.getElementById("btn3").disabled = true;
            document.getElementById("btn4").disabled = true;

            document.getElementById("startBtn").disabled = false;
        }
    },1000) // -1 sekunti joka sekunti
}

function restartGame() {
    clearInterval(timerInterval); //timerIntervallin pysäytys
    
    // muuttujien nollaus
        timeLeft = 10 //ajan asetus 2/3
        score = 0;
        document.getElementById("currentScore").innerHTML = "Tuloksesi: " + score;

        document.getElementById("btn1").disabled = false;
        document.getElementById("btn2").disabled = false;
        document.getElementById("btn3").disabled = false;
        document.getElementById("btn4").disabled = false;


        startGame();
    }

function nextQuestion(){
    let lausekeDiv = document.getElementById("lauseke");
    let firstNum = Math.floor(Math.random() * 11); //lausekkeen random luvut välillä 0-100
    let secondNum = Math.floor(Math.random() * 11); // ^ HOX! +1 pitää lisätä, jotta 0 lasketaan mukaan! myös vastauksiin!
    correctAnswer = firstNum + secondNum; //vastaus
    lausekeDiv.innerHTML = firstNum + "+" + secondNum; //lauseke

    let wrongAnswer1 = Math.floor(Math.random() * 21); 
    let wrongAnswer2 = Math.floor(Math.random() * 21); 
    let wrongAnswer3 = Math.floor(Math.random() * 21); 
    let wrongAnswer4 = Math.floor(Math.random() * 21); 

    // vaihtoehdot nappeihin
    document.getElementById("btn1").innerHTML = wrongAnswer1;
    document.getElementById("btn2").innerHTML = wrongAnswer2;
    document.getElementById("btn3").innerHTML = wrongAnswer3;
    document.getElementById("btn4").innerHTML = wrongAnswer4;

    // oikea vastaus yhteen nappiin
    let correctAnswerIndex = Math.floor(Math.random()*4)+1; // 1 2 3 4
    let correctAnswerID = "btn" + correctAnswerIndex;
    document.getElementById(correctAnswerID).innerHTML = correctAnswer;
}

//scoren ja high scoren päivitys ja lisäys (myös tallennus)
function checkAnswer(buttonIndex){
    let answer = document.getElementById("btn" + buttonIndex).innerHTML;
    if (answer == correctAnswer) score += 1;
    document.getElementById("currentScore").innerHTML = "Tuloksesi: " + score;
    if (score > highScore) highScore = score;
    localStorage.setItem("highscore",highScore); //highscoren tallennus!!
    document.getElementById("highscore").innerHTML = "Paras tuloksesi: " + highScore;

    nextQuestion();
}


