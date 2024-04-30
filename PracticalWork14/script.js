document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const fieldCont = document.getElementById('field-cont');
    const timerDisplay = document.getElementById('timer');
    const movesDisplay = document.getElementById('moves');
    const targetDisplay = document.getElementById('target');

    let gameData;
    let timerInterval;
    let movesCount;

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);

    function startGame() {
        clearInterval(timerInterval); 
        timerDisplay.textContent = '0'; 
        fetch('game.json')
            .then(response => response.json())
            .then(data => {
                gameData = data.game;
                initializeGame();
            })
            .catch(error => console.error('Помилка завантаження гри:', error));
    }

    function initializeGame() {
        movesCount = 0;
        updateMovesDisplay();

        const randomIndex = Math.floor(Math.random() * gameData.length);
        const currentGame = gameData[randomIndex];

        targetDisplay.textContent = currentGame.target;

        timerInterval = setInterval(updateTimer, 1000); 

        renderField(currentGame.fieldPattern);
    }

    function renderField(fieldPattern) {
        fieldCont.innerHTML = '';

        fieldPattern.forEach((row, i) => {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');

            row.forEach((cell, j) => {
                const cellDiv = document.createElement('div');
                cellDiv.classList.add('cell');
                cellDiv.classList.add(cell ? 'on' : 'off');
                cellDiv.addEventListener('click', () => toggleCell(fieldPattern, i, j));
                rowDiv.appendChild(cellDiv);
            });

            fieldCont.appendChild(rowDiv);
        });

        checkWin(fieldPattern); // Перевірка перемоги після оновлення поля гри
    }

    function toggleCell(fieldPattern, row, col) {
        fieldPattern[row][col] = !fieldPattern[row][col];
        if (row > 0) fieldPattern[row - 1][col] = !fieldPattern[row - 1][col];
        if (row < fieldPattern.length - 1) fieldPattern[row + 1][col] = !fieldPattern[row + 1][col];
        if (col > 0) fieldPattern[row][col - 1] = !fieldPattern[row][col - 1];
        if (col < fieldPattern[0].length - 1) fieldPattern[row][col + 1] = !fieldPattern[row][col + 1];

        movesCount++;
        updateMovesDisplay();
        renderField(fieldPattern);
    }

    function checkWin(fieldPattern) {
        const allOff = fieldPattern.every(row => row.every(cell => !cell));

        if (allOff) {
            clearInterval(timerInterval);
            alert('Вітаю! Ви перемогли!');
        }
    }

    function updateMovesDisplay() {
        movesDisplay.textContent = movesCount;
    }

    function updateTimer() {
        let timer = parseInt(timerDisplay.textContent);
        timer++;
        timerDisplay.textContent = timer;
    }

    function restartGame() {
        clearInterval(timerInterval); // Зупинити таймер
        timerDisplay.textContent = '0';
        movesCount = 0;
        updateMovesDisplay();
    }
});
