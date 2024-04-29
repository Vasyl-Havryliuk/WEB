// Функція для завантаження гри з JSON-файлу
async function loadGridFromJSON() {
    try {
        const response = await fetch('grids.json');
        const data = await response.json();
        // Випадково виберемо одне з полів
        const randomGame = data.game[Math.floor(Math.random() * data.game.length)];
        const grid = Object.values(randomGame)[0]; // Отримуємо значення гри
        const target = randomGame.target; // Отримуємо значення target
        return { grid, target }; // Повертаємо об'єкт з grid та target
    } catch (error) {
        console.error('Помилка завантаження гри з JSON:', error);
    }
}

// Функція для створення поля гри з використанням даних з JSON-файлу
async function createGameField() {
    const initialGameData = await loadGridFromJSON();
    const initialGrid = initialGameData[Object.keys(initialGameData)[0]];
    if (initialGrid) {
        grid = initialGrid;
        renderGrid(grid);
        steps = 0;
        updateSteps();
        startTime = Date.now();
        updateTimer();
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
            if (grid[i][j] === 1) { // Якщо значення 1, то додаємо клас 'on'
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
    grid[i][j] = (grid[i][j] === 0) ? 1 : 0; // Перемикаємо значення клітинки
    if (i > 0) grid[i - 1][j] = (grid[i - 1][j] === 0) ? 1 : 0; // Ліворуч
    if (i < 4) grid[i + 1][j] = (grid[i + 1][j] === 0) ? 1 : 0; // Праворуч
    if (j > 0) grid[i][j - 1] = (grid[i][j - 1] === 0) ? 1 : 0; // Вверх
    if (j < 4) grid[i][j + 1] = (grid[i][j + 1] === 0) ? 1 : 0; // Вниз
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
    if (grid.every(row => row.every(cell => cell === 0))) {
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

// Початкове налаштування гри
let grid;
let steps = 0;
let startTime = Date.now();
newGame();
