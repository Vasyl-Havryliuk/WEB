let difficulty = '';
let timerInterval;
let timer = 0;
let score = 0;
let gameStarted = false;
let blockSpeed = 10;
let blockSize = 50;

function showDifficulty() {
    document.getElementById('difficulty-buttons').style.display = 'block';
    document.querySelector('button').style.display = 'none';
}

function startGame(selectedDifficulty) {
    gameStarted = true;
    difficulty = selectedDifficulty;
    document.getElementById('difficulty-buttons').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    resetGame();
}

function changeColor() {
    blockColor = document.getElementById('color-picker').value;
    resetGame();
}

function resetGame() {
    clearInterval(timerInterval);
    timer = 0;
    score = 0;
    document.getElementById('timer').innerText = timer;
    document.getElementById('score').innerText = score;
    startTimer();
}

function startTimer() {
    if (difficulty === 'легкий') {
        timer = 8;
        blockSpeed = 0.5; // Дуже повільна швидкість для легкого рівня
        blockSize = 80;
    } else if (difficulty === 'середній') {
        timer = 4;
        blockSpeed = 15;
        blockSize = 50;
    } else if (difficulty === 'важкий') {
        timer = 2;
        blockSpeed = 30;
        blockSize = 30;
    }
    
    document.getElementById('timer').innerText = timer;
    if (!timerInterval) {
        timerInterval = setInterval(function() {
            if (timer > 0) {
                timer--;
                document.getElementById('timer').innerText = timer;
            } else {
                clearInterval(timerInterval);
                endGame();
            }
        }, 1000);
    }
}

document.getElementById('block').addEventListener('click', function() {
    if (gameStarted) {
        score++;
        document.getElementById('score').innerText = score;
        moveBlock();
    }
});

function moveBlock() {
    const block = document.getElementById('block');
    const maxX = window.innerWidth - blockSize;
    const maxY = window.innerHeight - blockSize;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    block.style.left = newX + 'px';
    block.style.top = newY + 'px';
    block.style.width = blockSize + 'px';
    block.style.height = blockSize + 'px';
    block.style.backgroundColor = blockColor;
    block.style.cursor = 'pointer';

    resetTimer(); // Спочатку анулюємо таймер
    startTimer(); // Потім запускаємо його знову
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function endGame() {
    gameStarted = false;
    alert("Гра закінчена. Ваш результат: " + score + " балів. Для проходження гри знову, перезавантажте сторінку:)");
}

function showColorPicker() {
    document.getElementById('color-picker-container').style.display = 'block';
}
