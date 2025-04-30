const box = document.getElementById('box');
const result = document.getElementById('result');

let startTime;
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function getRandomPosition() {
  const maxWidth = window.innerWidth - 100;
  const maxHeight = window.innerHeight - 100;

  const left = Math.random() * maxWidth;
  const top = Math.random() * maxHeight;

  box.style.left = `${left}px`;
  box.style.top = `${top}px`;
}
function showBox() {
  const delay = Math.random() * 2000 + 1000; 

  setTimeout(() => {
    getRandomPosition();
    box.style.backgroundColor = getRandomColor();
    box.style.display = 'block';
    startTime = Date.now();
  }, delay);
}
function handleClick() {
  const reactionTime = (Date.now() - startTime) / 1000; 
  box.style.display = 'none';
  result.textContent = `Your reaction time: ${reactionTime.toFixed(3)} seconds`;
  showBox(); 
}
box.addEventListener('click', handleClick);
showBox();
