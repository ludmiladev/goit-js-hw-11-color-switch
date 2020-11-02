import css from "./css/style.css";

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

let colorTime;


const color = () => {
  
  colorTime = setInterval(()=> {
    body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, 5)]}`;
    start.removeEventListener("click", color);
  }, 1000);
}

start.addEventListener('click', color);
stop.addEventListener('click', () => {
  clearInterval(colorTime);
  start.addEventListener('click', color);
});

