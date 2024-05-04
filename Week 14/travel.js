function checkAnswers() {
  const answer1 = document.querySelector('input[name="q1"]:checked').value;
  const answer2 = document.querySelector('input[name="q2"]:checked').value;

  if (answer1 === 'option1' && answer2 === 'option4') {
    alert('Congratulations! You got both answers right!');
  } else {
    alert('Oops! Try again. Make sure to select the correct answers.');
  }
}