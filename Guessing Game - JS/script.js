let max = 100;
let min = 1;
let tries = 5;
let answer;
let numberGuess;
let lastNumber;

question();

function getNumber(min, max) {
  numberGuess = Math.floor(Math.random() * (max - min)) + 1;
  return (lastNumber = numberGuess);
}

// Start Page

function question() {
  document.getElementById('begin').style.display = 'block';
}

document.querySelector('.btn-human').addEventListener('click', function () {
  document.getElementById('begin').style.display = 'none';
  document.getElementById('human').style.display = 'block';
  computerGuess();
});

document.querySelector('.btn-computer').addEventListener('click', function () {
  document.getElementById('begin').style.display = 'none';
  document.getElementById('computer').style.display = 'block';
  humanGuess();
});

// Computer Guessing TODO Fix RNG

function computerQuestion() {
  if (tries > 0) {
    document.querySelector(
      '.computer-guess'
    ).textContent = `I think your number is ${getNumber(
      min,
      max
    )}. How did I do?`;
  } else {
    document.querySelector('.computer-guess').textContent =
      'Nooo. I did not get your number!!! :-(';
  }
}

function computerGuess() {
  computerQuestion();

  document.querySelector('.btn-correct').addEventListener('click', function () {
    document.querySelector('.computer-guess').textContent =
      'Yay!!! I did it! :-)';
    tries = 0;
  });

  document.querySelector('.btn-high').addEventListener('click', function () {
    max = lastNumber - 1;
    tries = tries - 1;
    computerQuestion();
  });

  document.querySelector('.btn-low').addEventListener('click', function () {
    min = lastNumber + 1;
    tries = tries - 1;
    computerQuestion();
  });
}

function humanGuess() {
  document.querySelector(
    '.computer-guess'
  ).textContent = `I am thinking of a number between ${min} and ${max}. Try and guess it!!! :-)`;
  if (tries == 5) {
    document.querySelector('.computer-help').textContent = ``;
  }
  getNumber(min, max);

  document.querySelector('#btn-check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (tries == 0) {
      document.querySelector(
        '.computer-help'
      ).textContent = `Sorry, you did not get my number. The number was ${lastNumber}. :-(`;
      document.getElementById('check').style.display = 'none';
    } else if (guess == lastNumber) {
      document.querySelector(
        '.computer-help'
      ).textContent = `Yay!!! You guess my number!!! :-)`;
      document.getElementById('check').style.display = 'none';
    } else if (guess > lastNumber) {
      document.querySelector(
        '.computer-help'
      ).textContent = `You are too high!!!`;
      tries--;
    } else if (guess < lastNumber) {
      document.querySelector(
        '.computer-help'
      ).textContent = `You are too low!!!`;
      tries--;
    } else {
    }
  });
}
