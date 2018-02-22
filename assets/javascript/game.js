// Declare array for possible game words
var allWords = ["GIROUX", "VORACEK", "COUTURIER", "SIMMONDS", "NEUVIRTH"]
var gameWord;
var answerArray = [];
var userBadGuess = [];
var win = 0;
var guessRemain;

// Create a function to generate a random game word
function chooseWord() {
    gameWord = allWords[Math.floor(Math.random() * allWords.length)];
    
    // Reset the blanks, bad guesses and result message from prior game
    answerArray = [];
    userBadGuess = [];
    document.getElementById("divResultMessage").innerHTML = "";
    
    // Generate the corresponding blanks for the game word
    for (i = 0; i < gameWord.length; i++) {
        answerArray[i] = "_";
    }
    
    // Update blanks for new word and clear bad guesses
    document.getElementById("divCurrent").innerHTML = answerArray.join(" ");
    document.getElementById("spanGuessInput").innerHTML = userBadGuess;
    
    // Give the user a number of guesses based on gameWord length
    guessRemain = gameWord.length + 5;
    document.getElementById("divGuessRemain").innerHTML = guessRemain;
};

// Call the function for the initial game
chooseWord();

// Listen for input and format the case properly
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.which).toUpperCase();
    var wasGoodGuess;

// Ignore duplicate and non-letter input (come back to this part)


// Test input against each char in gameWord. If input is good, reveal letter.
    for (i = 0; i < gameWord.length; i++) {
        if (userGuess === gameWord[i]) {
            answerArray[i] = userGuess;
            wasGoodGuess = true;
        }
    }

// If all letters are revealed, the user wins. Determine by checking if answerArray contains no underscores
    if (answerArray.indexOf("_") === -1) {
        win++;
        document.getElementById("divResultMessage").innerHTML = "You win!";
    }

// If input is bad, then push into userBadGuess array and reduce guesses remaining
    if (wasGoodGuess !== true && guessRemain > 1) {
        userBadGuess.push(userGuess);
        guessRemain--;
        }
    
    // The user loses. Alert the user as such.
    else if (wasGoodGuess !== true && guessRemain === 1) {
        guessRemain--;
        document.getElementById("divResultMessage").innerHTML = "You lose!";
    }

    // Update results on screen
    document.getElementById("divWin").innerHTML = win;
    document.getElementById("divCurrent").innerHTML = answerArray.join(" ");
    document.getElementById("divGuessRemain").innerHTML = guessRemain;
    document.getElementById("spanGuessInput").innerHTML = userBadGuess;

};