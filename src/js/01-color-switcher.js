const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.setAttribute('disabled', false);
  buttonStop.removeAttribute('disabled');
});

buttonStop.addEventListener('click', () => {
  buttonStart.removeAttribute('disabled');
  buttonStop.setAttribute('disabled', false);
  clearInterval(timerId);
});
