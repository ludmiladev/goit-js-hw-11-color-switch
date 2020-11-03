const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
let intervalId = null;

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const changeBody = document.querySelector('body');


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = function () {
    intervalId = setInterval(() => {
        changeBody.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
        btnStart.setAttribute('disabled', true)
    }, 1000);
}

const stopChange = function () {
    clearInterval(intervalId);
    btnStart.removeAttribute('disabled')
}

btnStart.addEventListener('click', changeColor);
btnStop.addEventListener('click', stopChange);
