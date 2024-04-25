// tentti.js

// Function to start the exam based on the selected difficulty
function startExam(difficulty) {
    // Hide difficulty selection screen
    document.querySelector('.level-buttons').style.display = 'none';
    document.querySelector('.main').style.display = 'none';
    // Show exam screen
    document.getElementById('exam-container').style.display = 'block';

    // Here you can dynamically generate the exam content based on the difficulty
    // For now, let's just show a message indicating the difficulty
    let examContent = '';
    switch (difficulty) {
        case 'easy':
            examContent = '<p>This is an easy exam.</p>';
            break;
        case 'middle':
            examContent = '<p>This is a medium difficulty exam.</p>';
            break;
        case 'hard':
            examContent = '<p>This is a hard exam.</p>';
            break;
        default:
            examContent = '<p>Invalid difficulty.</p>';
            break;
    }
    document.getElementById('exam-container').innerHTML = examContent;
}
