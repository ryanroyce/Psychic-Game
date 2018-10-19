// wins,losses,guesses
var wins = 1;
var losses = 0;
var guesses = 13;
var guessedLetters = [];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var randomLetterGuess = Math.floor(Math.random() * letters.length);
var answer = letters[randomLetterGuess];

