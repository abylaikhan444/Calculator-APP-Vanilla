// #1 Find and Initialize variables
// Our storage varables
let currentInput = '';
let previousInput = ''; // строка куда перемещается первое число , после нажатие operations
let operation = null;
// let operations = {
//     'plus': '+',
//     'minus': '-',
//     'multiple': '×',
//     'divide': '÷'
// }
// экраны result и write
const writeBox = document.querySelector('.calculator__par-1__write-box');
const resultBox = document.querySelector('.calculator__par-1__result-box');
const calculateBody = document.querySelector('.calculator__box');

// кнопки цифр и операции
const number1 = document.querySelector('#btn-1');
const number2 = document.querySelector('#btn-2');
const number3 = document.querySelector('#btn-3');
const number4 = document.querySelector('#btn-4');
const number5 = document.querySelector('#btn-5');
const number6 = document.querySelector('#btn-6');
const number7 = document.querySelector('#btn-7');
const number8 = document.querySelector('#btn-8');
const number9 = document.querySelector('#btn-9');
const dot = document.querySelector('#btn-dot');
const themsBtn = document.querySelector('#btn-theme');

const plusOperation = document.querySelector('#btn-plus');
const minusOperation = document.querySelector('#btn-minus');
const multipleOperation = document.querySelector('#btn-multiple');
const divideOperation = document.querySelector('#btn-divide');
const acOperation = document.querySelector('#btn-ac');
const equalOperation = document.querySelector('#btn-equal')


// #2 Displaying Numbers on the Screen
// appendNumber и updateDisplay

function appendNumber(number) {
    // Если пришла точка И в строке она уже есть — прерываем функцию (защита от 5.5.5)
    if (number === '.' && currentInput.includes('.')) return;

    // В одну строчку прибавляем ЛЮБУЮ пришедшую цифру или точку
    currentInput += number;
}

function updateDisplay() {
    resultBox.textContent = currentInput;

    if (operation !== null) {
        writeBox.textContent = `${previousInput} ${operation}`;
    } else {
        writeBox.textContent = '';
    }
}

function chooseOperation(op) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculate();
    }

    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let computation

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '×':
            computation = prev * current;
            break;
        case '÷':
            if (current === 0) {
                currentInput = 'Error!';
                operation = null;
                previousInput = '';
                return;
            }
            computation = prev / current;
            break;
        default:
            break;
    }
    computation = parseFloat(computation.toFixed(10));
    currentInput = computation.toString();
    operation = null;
    previousInput = '';
}


// Навешиваем клики на кнопки
number1.addEventListener('click', () => {
    appendNumber('1');
    updateDisplay();
});

number2.addEventListener('click', () => {
    appendNumber('2');
    updateDisplay();
});

number3.addEventListener('click', () => {
    appendNumber('3');
    updateDisplay();
});

number4.addEventListener('click', () => {
    appendNumber('4');
    updateDisplay();
});

number5.addEventListener('click', () => {
    appendNumber('5');
    updateDisplay();
});

number6.addEventListener('click', () => {
    appendNumber('6');
    updateDisplay();
});

number7.addEventListener('click', () => {
    appendNumber('7');
    updateDisplay();
});

number8.addEventListener('click', () => {
    appendNumber('8');
    updateDisplay();
});

number9.addEventListener('click', () => {
    appendNumber('9');
    updateDisplay();
});

dot.addEventListener('click', () => {
    appendNumber('.');
    updateDisplay();
})

acOperation.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
})

plusOperation.addEventListener('click', () => {
    chooseOperation('+');
    updateDisplay();
})

minusOperation.addEventListener('click', () => {
    chooseOperation('-');
    updateDisplay();
})

multipleOperation.addEventListener('click', () => {
    chooseOperation('×');
    updateDisplay();
})

divideOperation.addEventListener('click', () => {
    chooseOperation('÷');
    updateDisplay();
})

equalOperation.addEventListener('click', () => {
    calculate();
    updateDisplay();
})

