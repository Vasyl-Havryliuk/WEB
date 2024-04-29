// Глобальні змінні для таймера, відстеження часу та кількості ходів
let timer;
let time;
let movesCount = 0;

// Функція для початку гри
const startGame = ({ target, fieldPattern }) => {
    movesCount = 0; // Скидання лічильника ходів
    setGameTarget(target); // Встановлення цілі гри
    resetMoveCount(); // Скидання лічильника ходів
    const restartButton = document.getElementById("restart-btn"); // Отримання кнопки перезапуску гри
    const fieldPatternCopy = JSON.parse(JSON.stringify(fieldPattern)); // Глибока копія масиву стану поля
    let field = constructField(fieldPatternCopy); // Конструювання поля гри
    attachClickEventsToCells(field, fieldPatternCopy); // Приєднання обробників подій до клітинок поля
    startTimer(); // Запуск таймера
    // Додавання обробника події для кнопки перезапуску гри
    restartButton.removeEventListener("click", restartHandler); // Видалення попереднього обробника
    restartButton.addEventListener("click", restartHandler); // Додавання нового обробника
};

// Функція для обробки перезапуску гри
const restartHandler = () => {
    if (timer) { // Перевірка, чи таймер запущений
        stopGameTimer(); // Зупинка таймера, якщо він запущений
    }
    startTimer(); // Запуск таймера
    const fieldPattern = getFieldPatternFromCurrentState(); // Отримання стану поля з DOM
    let field = constructField(fieldPattern); // Конструювання поля гри
    movesCount = 0; // Скидання лічильника ходів
    resetMoveCount(); // Скидання лічильника ходів
    attachClickEventsToCells(field, fieldPattern); // Приєднання обробників подій до клітинок поля
};

// Функція для отримання стану поля з DOM
const getFieldPatternFromCurrentState = () => {
    const cells = document.querySelectorAll(".field > .cell"); // Отримання всіх клітинок поля
    const fieldPattern = []; // Масив для зберігання стану поля
    let row = []; // Рядок для зберігання стану рядка поля
    cells.forEach((cell, index) => {
        row.push(cell.classList.contains("active") ? 1 : 0); // Додаємо 1, якщо клітина активна, і 0, якщо неактивна
        if ((index + 1) % 5 === 0) { // Якщо досягнуто кінець рядка
            fieldPattern.push(row); // Додаємо рядок до масиву стану поля
            row = []; // Очищуємо рядок
        }
    });
    return fieldPattern; // Повертаємо масив стану поля
};

// Функція для конструювання поля гри
const constructField = (fieldPattern) => {
    const fieldContainer = document.getElementById("field-cont"); // Отримання контейнера поля гри
    clearContainer(fieldContainer); // Очищення контейнера
    const field = []; // Масив для зберігання клітинок поля
    for (let i = 0; i < fieldPattern.length; i++) { // Перебір рядків поля
        const fieldRow = []; // Масив для зберігання клітинок рядка поля
        for (let j = 0; j < fieldPattern[0].length; j++) { // Перебір клітинок рядка поля
            const cell = createGameCell(fieldPattern[i][j]); // Створення клітинки
            fieldContainer.appendChild(cell); // Додавання клітинки до контейнера
            fieldRow.push(cell); // Додавання клітинки до масиву рядка поля
        }
        field.push(fieldRow); // Додавання рядка поля до масиву поля
    }
    return field; // Повертаємо масив поля
};

// Функція для очищення контейнера
const clearContainer = (container) => {
    container.innerHTML = ""; // Очищення вмісту контейнера
};

// Функція для створення клітинки
const createGameCell = (state) => {
    const cell = document.createElement("div"); // Створення елементу div для клітинки
    cell.classList.add("cell"); // Додавання класу "cell"
    state && cell.classList.add("active"); // Додавання класу "active", якщо стан клітинки true
    cell.addEventListener("click", () => { // Додавання обробника події для клікання на клітинку
        toggleCellState(cell); // Зміна стану клітинки
        updateMoveCount(); // Оновлення лічильника ходів
        checkIfAllCellsAreZeroes() && endTheGame(); // Перевірка, чи всі клітинки неактивні та завершення гри
    });
    return cell; // Повертаємо створену клітинку
};

// Функція для зміни стану клітинки
const toggleCellState = (cell) => {
    cell.classList.toggle("active"); // Перемикач класу "active"
};

// Функція для перевірки, чи всі клітинки неактивні
const checkIfAllCellsAreZeroes = () => {
    const activeCells = document.querySelectorAll(".field > .cell.active"); // Отримання активних клітинок поля
    return activeCells.length === 0; // Повертаємо true, якщо всі клітинки неактивні, інакше - false
};

// Функція для завершення гри
const endTheGame = () => {
    stopGameTimer(); // Зупинка таймера
    setTimeout(() => { // Встановлення таймауту перед виведенням повідомлення
        if (!alert("Congratulations! You've won!")) {} // Виведення повідомлення про перемогу
    }, 500);
};

// Функція для запуску таймера
const startTimer = () => {
    stopGameTimer(); // Зупинка таймера, якщо він запущений
    time = 0; // Скидання часу
    const timerContainer = document.getElementById("timer"); // Отримання контейнера для відображення таймера
    timerContainer.textContent = "00:00"; // Встановлення початкового значення таймера
    timer = setInterval(() => { // Запуск таймера
        time++; // Інкрементуємо час
        timerContainer.textContent = // Оновлення вмісту контейнера таймера
            Math.floor((time % 3600) / 60) // Обчислення хвилин
                .toString()
                .padStart(2, "0") + // Додавання ведучого нуля, якщо число менше 10
            ":" +
            Math.floor(time % 60) // Обчислення секунд
                .toString()
                .padStart(2, "0"); // Додавання ведучого нуля, якщо число менше 10
    }, 1000); // Оновлення таймера кожну секунду
};

// Функція для приєднання обробників подій до клітинок поля
const attachClickEventsToCells = (field, fieldPattern) => {
    const cells = document.querySelectorAll(".field > .cell"); // Отримання всіх клітинок поля
    cells.forEach((cell, index) => { // Перебір кожної клітинки
        const i = Math.floor(index / 5); // Визначення індексу рядка
        const j = index % 5; // Визначення індексу стовпця
        cell.addEventListener("click", () => { // Додавання обробника події для клікання на клітинку
            toggleCellState(cell); // Зміна стану клітинки
            toggleCellState(fieldPattern, i + 1, j); // Зміна стану клітинки знизу
            toggleCellState(fieldPattern, i - 1, j); // Зміна стану клітинки зверху
            toggleCellState(fieldPattern, i, j + 1); // Зміна стану клітинки праворуч
            toggleCellState(fieldPattern, i, j - 1); // Зміна стану клітинки ліворуч
            checkIfAllCellsAreZeroes() && endTheGame(); // Перевірка, чи всі клітинки неактивні та завершення гри
            updateMoveCount(); // Оновлення лічильника ходів
        });
    });
};

// Функція для оновлення лічильника ходів
const updateMoveCount = () => {
    movesCount++; // Інкрементуємо лічильник ходів
    document.getElementById("moves").textContent = movesCount; // Оновлюємо вміст елементу лічильника ходів
};

// Функція для скидання лічильника ходів
const resetMoveCount = () => {
    document.getElementById("moves").textContent = 0; // Скидання лічильника ходів
};

// Функція для зупинки таймера
const stopGameTimer = () => {
    clearInterval(timer); // Зупинка таймера
};

// Функція для встановлення цілі гри
const setGameTarget = (target) => {
    document.getElementById("target").textContent = target; // Встановлення цілі гри
};

// Функція для завантаження гри з JSON-файлу
const loadGameFromJson = async (jsonUrl) => {
    try {
        const response = await fetch(jsonUrl); // Відправлення запиту на сервер за JSON-файлом
        const { target, fieldPattern } = await response.json(); // Отримання даних з JSON-файлу
        startGame({ target, fieldPattern }); // Початок гри з отриманими даними
    } catch (error) {
        console.log(error); // Обробка помилок
    }
};

// Обробник кліку кнопки початку гри
const startButton = document.getElementById("start-btn"); // Отримання кнопки початку гри
startButton.addEventListener("click", () => { // Додавання обробника події для клікання на кнопку
    loadGameFromJson("game.json"); // Завантаження гри з JSON-файлу
});
