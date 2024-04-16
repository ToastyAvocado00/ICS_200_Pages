let playerScore = 0
let compScore = 0

const computerPlay = () => {
  const arrOfChoices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * 3)
  const compChoice = arrOfChoices [randomNum]
  return compChoice
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'You Tied! You both picked rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'You Tied! You both picked scissors'
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'You Tied! You both picked paper'
  } else if (playerSelection == 'scissors' &&  computerSelection === 'rock') {
    compScore++
    return 'You Lose! rock beats scissors'
  } else if (playerSelection == 'paper' &&  computerSelection === 'scissors') {
   compScore++
    return 'You Lose! scissors cuts paper'
  } else if (playerSelection == 'rock' &&  computerSelection === 'paper') {
   compScore++
    return 'You Lose! paper covers rock'
  } else if (playerSelection == 'rock' &&  computerSelection === 'scissors') {
    playerScore++
    return 'You Win! rock beats scissors'
  } else if (playerSelection == 'paper' &&  computerSelection === 'rock') {
    playerScore++
    return 'You Win! paper covers rock'
  } else if (playerSelection == 'scissors' &&  computerSelection === 'paper') {
    playerScore++
    return 'You Win! scissors cuts paper'
  }
}

const game = () => {
  for (let i =0 ; i < 5; i++){
    const playerSelection = prompt('Choose what to throw', 'Rock, Paper, Scissors').toLowerCase()
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
  }

 if (playerScore > compScore) {
  return 'You beat your opponent!'
 } else if (playerScore < compScore) {
  return 'You lose! Try Again.'
 } else {
  return 'You both tied! Try Again'
 }
}

game()
console.log(game())