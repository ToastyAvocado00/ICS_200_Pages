function startGame() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';

  for (let i = 0; i < 10; i++) {
      const petal = document.createElement('div');
      petal.classList.add('petals');
      petal.style.top = Math.random() * 280 + 'px'; 
      petal.style.left = Math.random() * 280 + 'px'; 
      petal.addEventListener('click', () => collectPetal(petal));
      gameBoard.appendChild(petal);
  }
}

function collectPetal(petal) {
  petal.style.display = 'none';
}