//Контрольна робота №2 Гаврилюка Василя Васильовича
//Варіант №2

document.addEventListener('DOMContentLoaded', function() {
    // Генеруємо масив з випадковими цілими числами
    const array = Array.from({length: 20}, () => Math.floor(Math.random() * 100));
  
    // Сортування за зростанням
    array.sort((a, b) => a - b);
  
    // Вивід відсортованого масиву
    const blockContainer = document.getElementById('blockContainer');
    blockContainer.innerHTML = `<p>${array.join(', ')}</p>`;
  
    document.getElementById('generateButton').addEventListener('click', generateBlock);
});
  
function generateBlock() {
    const dimensionSelect = document.getElementById('dimensionSelect');
    const dimensionValue = dimensionSelect.value;
    
    const blockContainer = document.getElementById('blockContainer');
    const blockWrapper = document.createElement('div');
    blockWrapper.className = 'block-wrapper'; // Додаємо клас для стилізації
    blockContainer.appendChild(blockWrapper);
  
    const block = document.createElement('div');
    block.className = 'block'; // Додаємо клас для стилізації
    block.style.backgroundColor = getColor();
    block.style.width = '30px';
    block.style.height = `${dimensionValue}px`;
    blockWrapper.appendChild(block);
  
    // Додаємо кнопки для руху блоку
    const moveLeftButton = document.createElement('button');
    moveLeftButton.textContent = 'Посунути вліво';
    moveLeftButton.onclick = function() { moveBlock(block, 'left'); };
    blockWrapper.appendChild(moveLeftButton);
  
    const moveRightButton = document.createElement('button');
    moveRightButton.textContent = 'Посунути вправо';
    moveRightButton.onclick = function() { moveBlock(block, 'right'); };
    blockWrapper.appendChild(moveRightButton);
}
  
function moveBlock(block, direction) {
    const currentLeft = parseInt(block.style.left) || 0;
    const offset = (direction === 'left') ? -20 : 20;
    block.style.left = `${currentLeft + offset}px`;
}
function getColor() {
    return 'blue';
}