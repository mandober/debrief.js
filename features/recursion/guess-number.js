// using recursion
function guessNumber(number, clue) {
    // Prompt the user for a number using the string value of clue
    var guess = prompt(clue);
    // Convert their guess to a number using +
    guess = +guess;

    // Define base case
    if (guess === number) {
        return console.log("You got it! The number was " + number);
    }

    // Define first recursive case (guess is too low)
    else if (guess < number) {
        guessNumber(number, clue);
    }
    // Define second recursive case (guess is too high)
    else if (guess > number) {
        guessNumber(number, clue);
    }
}


guessNumber(5, "Guess a number between 1 and 10.");


// using a while loop instead of recursion
function guessNumber(number, clue) {
    // Prompt the user for a number using the string value of clue
    guess = prompt(clue);
    // Convert their guess to a number
    guess = +guess;

    while (guess !== number) {
        if (guess < number) {
            guess = prompt("Too low. Guess again.");
        }
        else if (guess > number) {
            guess = prompt("Too high. Guess again.");
        }
        guess = +guess;
    }

    console.log("You got it! The number was " + number);
}
