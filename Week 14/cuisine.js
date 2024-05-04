let revealedLetters = [];

function revealLetter(letter) {
  if (!revealedLetters.includes(letter.innerText)) {
    revealedLetters.push(letter.innerText);
    letter.style.backgroundColor = '#fff';
    checkWordCompletion();
  }
}

function checkWordCompletion() {
  const words = ['TEMPURA', 'SUSHI', 'RAMEN', 'UDON'];
  const revealedString = revealedLetters.join('');

  for (let word of words) {
    if (revealedString === word) {
      alert(`Congratulations! You found the word "${word}"`);
      revealedLetters.splice(0, revealedLetters.length); 
      const hiddenLetters = document.querySelectorAll('.hidden-letter');
      hiddenLetters.forEach(letter => {
        letter.style.backgroundColor = '#eee';
      });
      break;
    }
  }
}