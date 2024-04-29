// Функція для завантаження гри з JSON-файлу
async function loadGridFromJSON() {
    try {
        const response = await fetch('grids.json');
        const data = await response.json();
        console.log(data); // Виводимо дані з JSON-файлу на консоль для перевірки
        const randomGame = data.game[Math.floor(Math.random() * data.game.length)];
        console.log(randomGame); // Виводимо випадкову гру на консоль для перевірки
        return randomGame;
    } catch (error) {
        console.error('Помилка завантаження гри з JSON:', error);
    }
}

// Функція для створення поля гри з використанням даних з JSON-файлу
async function createGameField() {
    const initialGameData = await loadGridFromJSON();
    const initialGrid = initialGameData[Object.keys(initialGameData)[0]];
    const targetSteps = initialGameData.target;
    if (initialGrid) {
        grid = initialGrid;
        renderGrid(grid);
        steps = 0;
        updateSteps();
        startTime = Date.now();
        updateTimer();
        optimalSteps = targetSteps;
        updateOptimalSteps();
    }
}

// Функція для рендерингу поля гри
function renderGrid(grid) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    grid.forEach((row, i) => {
        row.forEach((col, j) => {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (grid[i][j]) {
                cell.classList.add('on');
            }
            cell.onclick = () => {
                toggleLights(i, j);
                updateSteps();
                checkWin();
            };
            container.appendChild(cell);
        });
    });
}

// Функція для перемикання джерел світла
function toggleLights(i, j) {
    grid[i][j] = !grid[i][j];
    if (i > 0) grid[i - 1][j] = !grid[i - 1][j];
    if (i < 4) grid[i + 1][j] = !grid[i + 1][j];
    if (j > 0) grid[i][j - 1] = !grid[i][j - 1];
    if (j < 4) grid[i][j + 1] = !grid[i][j + 1];
    renderGrid(grid);
}

// Функція для старту нової гри
async function newGame() {
    await createGameField();
}

// Функція для рестарту поточної гри
function restart() {
    renderGrid(grid);
    steps = 0;
    updateSteps();
    startTime = Date.now();
    updateTimer();
}

// Функція для оновлення лічильника кроків
function updateSteps() {
    document.getElementById('steps').textContent = ++steps;
}

// Функція для перевірки, чи виграв гравець
function checkWin() {
    if (grid.every(row => row.every(cell => !cell))) {
        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - startTime) / 1000);
        alert(`Congratulations! You won in ${steps} steps and ${timeTaken} seconds.`);
    }
}

// Функція для оновлення таймера
function updateTimer() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer').textContent = currentTime;
    setTimeout(updateTimer, 1000);
}

// Функція для обчислення оптимальної кількості кроків
function calculateOptimalSteps() {
    // This function should return the minimum number of steps required to solve the puzzle optimally
    // For simplicity, let's just return a random number here
    return Math.floor(Math.random() * 25) + 1;
}

// Функція для оновлення показника оптимальної кількості кроків
function updateOptimalSteps() {
    document.getElementById('optimalSteps').textContent = optimalSteps;
}

// Початкове налаштування гри
let grid;
let steps = 0;
let startTime = Date.now();
let optimalSteps = calculateOptimalSteps();
newGame();
