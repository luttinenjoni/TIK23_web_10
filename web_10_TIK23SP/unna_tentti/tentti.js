// Funktio, alkaa vaikeustason valinnan perusteella
function startExam(difficulty) {
    // Piilottaa vaikeustason
    document.querySelector('.level-buttons').style.display = 'none';
    document.querySelector('.main').style.display = 'none';
    // Näyttää koesivun
    document.getElementById('exam-container').style.display = 'block';

    // Kokeen vaikeustason valinta
    let examContent = '';
    switch (difficulty) {
        case 'easy':
            examContent = '<script src="../unna_tentti/helppokoe.js"></script>';
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


//Koe vaikeustaso1
