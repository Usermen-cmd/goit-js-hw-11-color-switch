const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const buttonsRefs = document.querySelectorAll('button');
const bodyRef = document.body;

let nodeBtnStart = null;
let colorIntervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const onStopClick = function () {
  nodeBtnStart.disabled = false;
  clearInterval(colorIntervalId);
};

const onStartClick = function () {
  colorIntervalId = setInterval(() => {
    const randomColorIndex = randomIntegerFromInterval(0, colors.length);
    bodyRef.style.backgroundColor = colors[randomColorIndex];
  }, 1000);
};

const onButtonsClick = function (e) {
  if (e.target.dataset.action === 'start') {
    onStartClick();
    nodeBtnStart = e.target;
    nodeBtnStart.disabled = true;
    return;
  }
  onStopClick();
};

buttonsRefs.forEach(btn => btn.addEventListener('click', onButtonsClick));
