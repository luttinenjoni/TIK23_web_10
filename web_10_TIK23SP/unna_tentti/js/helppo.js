//Level 1, 2 ja 3 toimii kaikki samalla periaatteella, pienillä muutoksilla tehtävissä ja määrissä

function generateArithmeticQuestions(numberOfQuestions) {
    const operations = ['+', '-', '*', '/'];
    const questions = [];

    // kyllä/ei  kysymykset
    const userQuestions = [
        {
            question: "Voiko yhteenlaskun ja vähennyslaskun vaihtosääntöä käyttää kaikissa tilanteissa? (vastaa kyllä tai ei)",
            answer: "ei"
        },
        {
            question: "Onko kertolasku nollan kanssa aina nolla? (vastaa kyllä tai ei)",
            answer: "kyllä"
        },
        {
            question: "Voiko jakolaskua peruuttaa kertolaskulla? (vastaa kyllä tai ei)",
            answer: "kyllä"
        },
        {
            question: "Pitääkö aina paikkansa, että mikä tahansa luku plus nolla on yhtä suuri kuin alkuperäinen luku? (vastaa kyllä tai ei)",
            answer: "kyllä"
        }
    ];

    userQuestions.forEach((item) => {
        questions.push({ question: item.question, answer: item.answer, userAnswer: null });
    });

    // Luo matemaattiset kysymykset
    for (let i = questions.length; i < numberOfQuestions; i++) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let question;
        let answer;

        // määrittää kysymykset ja vastauksen
        switch (operation) {
            case '+':
                answer = num1 + num2;
                question = `Paljonko on ${num1} + ${num2}?`;
                break;
            case '-':
                answer = num1 > num2 ? num1 - num2 : num2 - num1;
                question = num1 > num2 ? `Paljonko on ${num1} - ${num2}?` : `Paljonko on ${num2} - ${num1}?`;
                break;
            case '*':
                answer = num1 * num2;
                question = `Kertaa: ${num1} * ${num2}`;
                break;
            case '/':
                const product = num1 * num2;
                answer = num2;
                question = `Jaa: ${product} / ${num1}`;
                break;
        }
        questions.push({ question, answer, userAnswer: null });
    }
    return questions;
}

// Luo 30 kysymystä ja tallentaa ne muuttujaan
const questionPool = generateArithmeticQuestions(30);

// Koen aloitus
function startExam() {
    // Valitsee randomisti 10 kysymystä
    const selectedQuestions = questionPool.sort(() => 0.5 - Math.random()).slice(0, 10);
    const leftColumn = document.getElementById('left-column');
    const rightColumn = document.getElementById('right-column');
    // poistaa aikaisemman contentin
    leftColumn.innerHTML = '';
    rightColumn.innerHTML = '';

    // Asettaa jokaise kysymyksen oikeaan paikkaan
    selectedQuestions.forEach((item, index) => {
        const questionHtml = `<div class='question'>
            <p>${item.question}</p>
            <input type='text' id='answer${index}' class='form-control' data-answer='${item.answer}'>
            <span class='feedback'></span>
        </div>`;
        if (index < 5) {
            leftColumn.innerHTML += questionHtml;
        } else {
            rightColumn.innerHTML += questionHtml;
        }
    });
    document.getElementById('exam-container').style.display = 'block';
}

// Sivu latautuu kokonaan ennenku kokeen voi aloittaa
document.addEventListener('DOMContentLoaded', startExam);

// Vastauksien tarkistaminen
function checkAnswers() {
    const inputs = document.querySelectorAll('input[type="text"]');
    let correctCount = 0;

    inputs.forEach((input) => {
        const correctAnswer = input.getAttribute('data-answer').toLowerCase();
        const userAnswer = input.value.toLowerCase();
        const result = correctAnswer === userAnswer ? 'correct' : 'incorrect';

        if (result === 'correct') {
            correctCount++;
        }

        const feedbackText = input.nextElementSibling;
        feedbackText.textContent = result === 'correct' ? 'Oikein!' : 'Väärin!';
        feedbackText.style.color = result === 'correct' ? '#28a745' : '#dc3545';
    });

    // Näyttää skoren ja kommentin
    const scoreContainer = document.getElementById('score-container');
    const scoreSummary = document.getElementById('score-summary');
    const totalQuestions = inputs.length;
    const scorePercent = (correctCount / totalQuestions) * 100;

    let performanceMessage;
    if (scorePercent === 0) {
        performanceMessage = "Hm, oletkohan opiskellut ollenkaan?";
    } else if (scorePercent < 50) {
        performanceMessage = "Hieno aloitus! Vielä voit parantaa, käy harjoittelemassa hieman lisää!";
    } else if (scorePercent < 100) {
        performanceMessage = "Hienoa työtä! Olet selvästi opiskellut!";
    } else {
        performanceMessage = "Mahtavaa työtä! Kaikki oikein!";
    }

    scoreSummary.textContent = `Sait ${correctCount} pistettä ${totalQuestions} pisteetsä! ${performanceMessage}`;
    scoreContainer.style.display = 'block';

    //Tarkistaa onko uusi tulos highscore, jos on niin korvaa vanhan näytettävän tuloksen sillä
    const previousHighscore = parseInt(localStorage.getItem("level1_highscore")) || 0;
    if (correctCount > previousHighscore) {
        localStorage.setItem("level1_highscore", correctCount);
    }
}


