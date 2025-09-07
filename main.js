const container = document.querySelector('.container');
const gridSquare = 16;

for (let i = 0; i < gridSquare; i++) {
  for (let j = 0; j < gridSquare; j++) {
    const div = document.createElement('div');
    container.appendChild(div);
  }
}
