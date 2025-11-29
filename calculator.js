// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero!";
    }
    return number1 / number2;
}

// Helper Function to Get Numbers
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Event Listeners

// Add
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Subtract
document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Multiply
document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Divide
document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
