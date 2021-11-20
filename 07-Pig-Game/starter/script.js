'use strict';
//buttons
const btnNewGame = document.querySelector('.btn--new');
const btnRollGame = document.querySelector('.btn--roll');
const btnHoldGame = document.querySelector('.btn--hold');
// scores
const scorePl0 = document.querySelector('#score--0');
const scorePl1 = document.querySelector('#score--1');

// dice
const clsDice = document.querySelector('.dice');
// Current Score
const currentScorePl0 = document.querySelector('#current--0');
const currentScorePl1 = document.querySelector('#current--1');

//Players
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const resetGame = () => {
  //score
  scorePl0.textContent = 0;
  scorePl1.textContent = 0;
  // current score
  currentScorePl0.textContent = 0;
  currentScorePl1.textContent = 0;
  //Set player 0 active
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
  }
};

// New Game
btnNewGame.addEventListener('click', resetGame);

const rollDice = () => {
  // 1. Generating a random dice roll
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  clsDice.src = `dice-${randomDice}.png`;

  if (randomDice === 1) {
    //switch player
    switchPlayer();
  } else {
    addCurrentScore(randomDice);
  }
};

//================================================================================
// Roll Dice
btnRollGame.addEventListener('click', rollDice);

const switchPlayer = () => {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
};

const addCurrentScore = dice => {
  let currentScore;
  let newCurrentScore;
  if (player0.classList.contains('player--active')) {
    currentScore = currentScorePl0.textContent;
    newCurrentScore = Number(currentScore) + Number(dice);
    currentScorePl0.textContent = newCurrentScore;
  } else {
    currentScore = currentScorePl1.textContent;
    newCurrentScore = Number(currentScore) + Number(dice);
    currentScorePl1.textContent = newCurrentScore;
  }
};
//================================================================================

//================================================================================
// HOLD
