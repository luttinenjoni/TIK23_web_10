function generateHardestArithmeticQuestions(numberOfQuestions) {
    const operations = ['+', '-', '*', '/'];
    const questions = [];

    // Vaikeimman tason kysymykset
    const hardestQuestions = [
        {
            question: "Laske: 236 + 487 - 123?",
            answer: "600"
        },
        {
            question: "Laske: Neljäsosa luvusta 144, plus puolet luvusta 288.",
            answer: "216"
        },
        {
            question: "Jos suorakulmion pituus on 12,375 metriä ja leveys on 9,625 metriä, mikä on sen pinta-ala?",
            answer: "119.0625"
        },
        {
            question: "Laske: (2^4 - 2^3) * 5 / 2",
            answer: "15"
        }
    ];

    hardestQuestions.forEach((item) => {
        questions.push({ question: item.question, answer: item.answer, userAnswer: null });
    });

    // Randomisoi kysymykset
    for (let i = questions.length; i < numberOfQuestions; i++) {
        const num1 = Math.floor(Math.random() * 1000) + 1;
        const num2 = Math.floor(Math.random() * 1000) + 1; 
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let question;
        let answer;

        // Kysymykset ja vastaukset
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

// 30 random kysymystä
const hardestQuestionPool = generateHardestArithmeticQuestions(30);

// Koen alotus
function startExam() {
    const selectedQuestions = hardestQuestionPool.sort(() => 0.5 - Math.random()).slice(0, 20);
    const leftColumn = document.getElementById('left-column');
    const rightColumn = document.getElementById('right-column');

    leftColumn.innerHTML = '';
    rightColumn.innerHTML = '';

    selectedQuestions.forEach((item, index) => {
        const questionHtml = `<div class='question'>
            <p>${item.question}</p>
            <input type='text' id='answer${index}' class='form-control' data-answer='${item.answer}'>
            <span class='feedback'></span>
        </div>`;
        if (index < 10) {
            leftColumn.innerHTML += questionHtml;
        } else if (index < 20) {
            rightColumn.innerHTML += questionHtml;
        } else {
            console.log("More than 20 questions, adjust layout accordingly");
        }
    });
    document.getElementById('exam-container').style.display = 'block';
}

// lataa sivun ennen alotusta
document.addEventListener('DOMContentLoaded', startExam);

// Vastausten tarkistus
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

    scoreSummary.textContent = `Sait ${correctCount} pistettä ${totalQuestions} pisteestä! ${performanceMessage}`;
    scoreContainer.style.display = 'block';
}