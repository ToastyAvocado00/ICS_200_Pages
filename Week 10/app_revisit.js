let playerScore = 0
let compScore = 0
const rockButton= document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const compScoreSpan = document.querySelector('.comp-score')

const computerPlay = () => {
  const arrOfChoices = ['rock', 'paper', 'scissors']
  const randomNum = Math.floor(Math.random() * 3)
  const compChoice = arrOfChoices [randomNum]
  return compChoice
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    const p = document.createElement('p')
    p.innerText = 'You Tied! You both picked rock'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    const p = document.createElement('p')
    p.innerText = 'You Tied! You both picked scissors'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    const p = document.createElement('p')
    p.innerText = 'You Tied! You both picked paper'
    outcomeDiv.appendChild(p)
  } else if (playerSelection == 'scissors' &&  computerSelection === 'rock') {
    const p = document.createElement('p')
    compScore++
    p.innerText = 'You Lose! rock beats scissors'
    outcomeDiv.appendChild(p)
  } else if (playerSelection == 'paper' &&  computerSelection === 'scissors') {
    const p = document.createElement('p')
   compScore++
   p.innerText = 'You Lose! scissors cuts paper'
   outcomeDiv.appendChild(p)
  } else if (playerSelection == 'rock' &&  computerSelection === 'paper') {
    const p = document.createElement('p')
   compScore++
   p.innerText = 'You Lose! paper covers rock'
   outcomeDiv.appendChild(p)
  } else if (playerSelection == 'rock' &&  computerSelection === 'scissors') {
    const p = document.createElement('p')
    playerScore++
    p.innerText = 'You Win! rock beats scissors'
    outcomeDiv.appendChild(p)
  } else if (playerSelection == 'paper' &&  computerSelection === 'rock') {
    const p = document.createElement('p')
    playerScore++
    p.innerText = 'You Win! paper covers rock'
    outcomeDiv.appendChild(p)
  } else if (playerSelection == 'scissors' &&  computerSelection === 'paper') {
    const p = document.createElement('p')
    playerScore++
    p.innerText = 'You Win! scissors cuts paper'
    outcomeDiv.appendChild(p)
  }
}

const checkForWinner = (playerScore, compScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add('player-won')
    h2.innerText = 'You Won!'
    outcomeDiv.append(h2)
  } 
  else if (compScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add('computer-won')
    h2.innerText = 'You Lost!'
    outcomeDiv.append(h2)
  
  }
}
const updateScores = (playerScore, compScore) => {
  playerScoreSpan.innerText = `Players Score:  ${playerScore}`
  compScoreSpan.innerText = `Computers Score:  ${compScore} `
}

rockButton.addEventListener('click', () => {
  const computerSelection = computerPlay ()
  const playerSelection = 'rock'
  playRound(playerSelection, computerSelection)
updateScores(playerScore, compScore)
  checkForWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
  const computerSelection = computerPlay ()
  const playerSelection = 'paper'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, compScore)
  checkForWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
  const computerSelection = computerPlay ()
  const playerSelection = 'scissors'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, compScore)
  checkForWinner(playerScore, compScore)
})
