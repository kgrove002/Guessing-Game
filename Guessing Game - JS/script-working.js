let max = 100;
let min = 1;
let tries = 5;
let answer;
let numberGuess;
let lastNumber;

question();

function question() {
  answer = prompt(
    "Hello there. Who will be guessing? The human or the computer?"
  );

  if (answer == "human") {
    humanGuess();
  } else if (answer == "computer") {
    computerGuess();
  } else {
    prompt("Hello there. Who will be guessing? The human or the computer?");
  }
}

function getNumber(min, max) {
  numberGuess = Math.floor(Math.random() * (max - min)) + 1;
  return (lastNumber = numberGuess);
}

function computerGuess() {
  console.log(
    `Think of a number between ${min} and ${max} and I wil try to guess it.`
  );
  while (tries > 0) {
    console.log(
      `Is this your number: ${getNumber(
        min,
        max
      )}. Please type h if I am too high or l if I am too low, or yes if I am right.`
    );
    answer = prompt("Please enter answer here:");
    tries = tries - 1;

    if (tries == 0) {
      console.log(`Nooo. I did not get your number!!! :-(`);
      break;
    } else if (answer == "y") {
      console.log("Yay I did it! :-)");
      break;
    } else if (answer == "h") {
      max = lastNumber - 1;
    } else if (answer == "l") {
      min = lastNumber + 1;
    } else {
      break;
    }
  }
}

function humanGuess() {
  console.log(
    `I am thinking of a number between ${min} and ${max}. Try and guess it!!! :-)`
  );

  getNumber(min, max);

  while (tries > 0) {
    tries = tries - 1;
    answer = prompt("Please enter answer here:");

    if (tries == 0) {
      console.log(
        `Sorry, you did not get my number. The number was ${lastNumber}. :-(`
      );
    } else if (answer == lastNumber) {
      `Yay!!! You guess my number!!! :-)`;
    } else if (answer > lastNumber) {
      console.log(`You are too high!!!`);
    } else if (answer < lastNumber) {
      console.log(`You are too low!!!`);
    } else {
      break;
    }
  }
}
