const container = document.querySelector('.container');

const defaultGridSize = () => {
  const gridSquare = 16;
  createGridSquare(gridSquare);
};

const createGridSquare = (gridSquare) => {
  const squareSize = 400 / gridSquare;

  for (let i = 0; i < gridSquare; i++) {
    for (let j = 0; j < gridSquare; j++) {
      const div = document.createElement('div');
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;
      div.style.boxSizing = 'border-box';
      div.style.border = '1px solid black';
      div.style.backgroundColor = 'white';
      container.appendChild(div);
    }
  }
};

container.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'DIV') {
    event.target.style.backgroundColor = '#F85B1A';
  }
});

const button = document.querySelector('button');
button.addEventListener('click', () => {
  const userInput = prompt('Enter number of squares per side (max 100):');
  const value = parseInt(userInput);

  if (value >= 1 && value <= 100) {
    container.innerHTML = '';
    createGridSquare(value);
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

defaultGridSize();
