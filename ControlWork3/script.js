document.addEventListener('DOMContentLoaded', function() {
    function getOperands() {
        var operand1 = parseFloat(document.getElementById('op1').value);
        return operand1;
    }

    document.getElementById('log-button').addEventListener('click', function() {
        var operand1 = getOperands();
        fetch('log.json')
            .then(response => response.json())
            .then(data => {
                var logValue = Math.log(operand1);
                var logDescription = data.description;
                document.getElementById('res').textContent = 'Result: ' + logValue.toFixed(4);
                document.getElementById('content').innerHTML = `
                    <h3>${data.name}</h3>
                    <p>${data.description}</p>
                    <img src="${data.image_name}" alt="${data.name}">
                `;
            })
            .catch(error => console.error('Помилка:', error));
    });

    document.getElementById('sin-button').addEventListener('click', function() {
        var operand1 = getOperands();
        fetch('sin.json')
            .then(response => response.json())
            .then(data => {
                var sinValue = Math.sin(operand1 * Math.PI / 180);
                var sinDescription = data.description;
                document.getElementById('res').textContent = 'Result: ' + sinValue.toFixed(4);
                document.getElementById('content').innerHTML = `
                    <h3>${data.name}</h3>
                    <p>${data.description}</p>
                    <img src="${data.image_name}" alt="${data.name}">
                `;
            })
            .catch(error => console.error('Помилка:', error));
    });

    document.getElementById('tan-button').addEventListener('click', function() {
        var operand1 = getOperands();
        fetch('tan.json')
            .then(response => response.json())
            .then(data => {
                var tanValue = Math.tan(operand1 * Math.PI / 180); 
                var tanDescription = data.description;
                document.getElementById('res').textContent = 'Result: ' + tanValue.toFixed(4);
                document.getElementById('content').innerHTML = `
                    <h3>${data.name}</h3>
                    <p>${data.description}</p>
                    <img src="${data.image_name}" alt="${data.name}">
                `;
            })
            .catch(error => console.error('Помилка:', error));
    });

    document.getElementById('add-button').addEventListener('click', function() {
        var operand1 = parseFloat(document.getElementById('op1').value);
        var operand2 = parseFloat(document.getElementById('op2').value);
        var result = operand1 + operand2;
        document.getElementById('res').textContent = 'Result: ' + result;
    });

    document.getElementById('sub-button').addEventListener('click', function() {
        var operand1 = parseFloat(document.getElementById('op1').value);
        var operand2 = parseFloat(document.getElementById('op2').value);
        var result = operand1 - operand2;
        document.getElementById('res').textContent = 'Result: ' + result;
    });

    document.getElementById('mul-button').addEventListener('click', function() {
        var operand1 = parseFloat(document.getElementById('op1').value);
        var operand2 = parseFloat(document.getElementById('op2').value);
        var result = operand1 * operand2;
        document.getElementById('res').textContent = 'Result: ' + result;
    });

    document.getElementById('div-button').addEventListener('click', function() {
        var operand1 = parseFloat(document.getElementById('op1').value);
        var operand2 = parseFloat(document.getElementById('op2').value);
        if (operand2 !== 0) {
            var result = operand1 / operand2;
            document.getElementById('res').textContent = 'Result: ' + result;
        } else {
            document.getElementById('res').textContent = 'Result: Ділення на нуль!';
        }
    });
});
