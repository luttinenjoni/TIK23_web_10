//Level 1, 2 ja 3 toimii kaikki samalla periaatteella, pienillä muutoksilla tehtävissä ja määrissä

function generateHarderArithmeticQuestions(numberOfQuestions) {
    const operations = ['+', '-', '*', '/'];
    const questions = [];

    // Keskivaikeat kysymykset
    const harderQuestions = [
        {
            question: "Laske: 25 + 37 - 18?",
            answer: "44"
        },
        {
            question: "Laske: Kuusitoista kerrottuna viidellä, plus kaksitoista jaettuna neljälle.",
            answer: "84"
        },
        {
            question: "Paljonko on: Yhdeksänkymmentäyhdeksän jaettuna kolmella kerrottuna kahdella?",
            answer: "66"
        },
        {
            question: "Jos suorakulmion pituus on 8,5 metriä ja leveys on 4,3 metriä, mikä on sen pinta-ala?",
            answer: "36.55"
        }
    ];

    harderQuestions.forEach((item) => {
        questions.push({ question: item.question, answer: item.answer, userAnswer: null });
    });

    for (let i = questions.length; i < numberOfQuestions; i++) {
        const num1 = Math.floor(Math.random() * 100) + 1;
        const num2 = Math.floor(Math.random() * 100) + 1;
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let question;
        let answer;

        // vastaukset ja kysymysten määritys
        switch (operation) {
            case '+':
                answer = num1 + num2;
                question = `Paljonko on ${num1} + ${num2}?`;
                break;
            case '-':
                answer = Math.abs(num1 - num2);
                question = `Paljonko on ${Math.max(num1, num2)} - ${Math.min(num1, num2)}?`;
                break;
            case '*':
                answer = num1 * num2;
                question = `Laske: ${num1} * ${num2}`;
                break;
            case '/':
                const dividend = num1 * num2;
                answer = num2;
                question = `Jaa: ${dividend} / ${num1}`;
                break;
        }
        questions.push({ question, answer, userAnswer: null });
    }
    return questions;
}

// Ranomisoi 30 kysymystä
const harderQuestionPool = generateHarderArithmeticQuestions(30);

// Aloittaa kokeen
function startExam() {
    const selectedQuestions = harderQuestionPool.sort(() => 0.5 - Math.random()).slice(0, 15);
    const leftColumn = document.getElementById('left-column');
    const rightColumn = document.getElementById('right-column');

    leftColumn.innerHTML = '';
    rightColumn.innerHTML = '';

    // Asettaa kysymykset oikein
    selectedQuestions.forEach((item, index) => {
        const questionHtml = `<div class='question'>
            <p>${item.question}</p>
            <input type='text' id='answer${index}' class='form-control' data-answer='${item.answer}'>
            <span class='feedback'></span>
        </div>`;
        if (index < 7) {
            leftColumn.innerHTML += questionHtml;
        } else if (index < 15) {
            rightColumn.innerHTML += questionHtml;
        } else {
            console.log("More than 15 questions, adjust layout accordingly");
        }
    });
    document.getElementById('exam-container').style.display = 'block';
}

// Lataa sivun kokonaan ennen kuin aloittaa
document.addEventListener('DOMContentLoaded', startExam);

// Tehtävien tarkistus
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

    // Palaute
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

    scoreSummary.textContent = `Sait ${correctCount} oikein ${totalQuestions}:stä! ${performanceMessage}`;
    scoreContainer.style.display = 'block';
}

