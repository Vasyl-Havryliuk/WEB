document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Щоб форма не відправляла дані
    const username = document.getElementById('username').value || 'Ім’я користувача';
    const email = document.getElementById('email').value || 'Електронна пошта';
    const meal = document.querySelector('input[name="meal"]:checked') ? document.querySelector('input[name="meal"]:checked').value : 'не вказано';
    const dishes = Array.from(document.querySelectorAll('input[name="dish"]:checked')).map(checkbox => checkbox.value);
    const comment = document.getElementById('comment').value || 'не вказано';
    const result = `${username} (${email}) з’їв на ${meal} ${dishes.join(', ')} та залишив такий коментар: "${comment}"`;

    document.getElementById('result').textContent = result;
});
