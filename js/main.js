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

const plusOperation = document.querySelector('#btn-plus');
const minusOperation = document.querySelector('#btn-minus');
const multipleOperation = document.querySelector('#btn-multiple');
const divideOperation = document.querySelector('#btn-divide');
const acOperation = document.querySelector('#btn-ac');
const equaloperation = document.querySelector('#btn-equal')


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
}

// Навешиваем клики на кнопки
number1.addEventListener('click', () => {
    appendNumber('1');  // Отправляем единицу в функцию
    updateDisplay();    // Обновляем экран
});

number2.addEventListener('click', () => {
    appendNumber('2');  // Отправляем двойку
    updateDisplay();    // Обновляем экран
});

number3.addEventListener('click', () => {
    appendNumber('3');  // Отправляем двойку
    updateDisplay();    // Обновляем экран
});

number4.addEventListener('click', () => {
    appendNumber('4');  // Отправляем двойку
    updateDisplay();    // Обновляем экран
});

number5.addEventListener('click', () => {
    appendNumber('5');  // Отправляем двойку
    updateDisplay();    // Обновляем экран
});

number6.addEventListener('click', () => {
    appendNumber('6');  // Отправляем двойку
    updateDisplay();    // Обновляем экран
});

number7.addEventListener('click', () => {
    appendNumber('7');  // Отправляем двойку
    updateDisplay();    // Обновляем экран
});

number8.addEventListener('click', () => {
    appendNumber('8');  // Отправляем двойку
    updateDisplay();    // Обновляем экран
});

number9.addEventListener('click', () => {
    appendNumber('9');  // Отправляем двойку
    updateDisplay();    // Обновляем экран
});

dot.addEventListener('click', () => {
    appendNumber('.');
    updateDisplay();
})

acOperation.addEventListener('click', () => {
    currentInput = '';
    updateDisplay();
})

plusOperation.addEventListener('click', () => {
    appendNumber('+');
    updateDisplay();
})

minusOperation.addEventListener('click', () => {
    appendNumber('-');
    updateDisplay();
})

multipleOperation.addEventListener('click', () => {
    appendNumber('×');
    updateDisplay();
})

divideOperation.addEventListener('click', () => {
    appendNumber('÷');
    updateDisplay();
})


console.log(currentInput);
