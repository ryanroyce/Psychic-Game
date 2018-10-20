// wins, losses, starting guesses, alphabet
var winsCount=0;
var lossesCount=0;
var defaultguessesLeft=13;
var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesArray=[];

// variables to add wins and losses into div ids later
var win=document.getElementById("wins");
var lose=document.getElementById("losses");

// variables to put guesses and letters guessed into div ids
var guessesLeft=document.getElementById("guessesLeft");
var guessesSoFar=document.getElementById("guessesSoFar");
var guessesLeftCount=defaultguessesLeft;

// function to have comp "returns" a random letter
var compChoice = function() {
	randomLetter=alphabet[Math.floor(Math.random()*alphabet.length)]
	return randomLetter;
}

// function to insert wins, losses, guesses and guesses left into html page
var showWinsAndLosses=function() {
	win.innerHTML=winsCount;
	lose.innerHTML=lossesCount;
	guessesLeft.innerHTML=guessesLeftCount;
	guessesSoFar.innerHTML=guessesArray;
}

// user wins function when keypress equals computers guess
var userWon=function(userLetter) {
	return userLetter==currentLetter;
}
// user losses function when guesses get to zero
var userLost=function() {
	return guessesLeftCount==0;
}
// resets game to have nothing in guessesArray, back to 13 guesses and selects new random number
var GameOver=function() {
	guessesArray=[];
	guessesLeftCount=defaultguessesLeft;
	currentLetter=compChoice();
}
// establish displaying wins/losses criteria
var currentLetter=compChoice();
showWinsAndLosses();

// keypress function, decrement guesses, win and lose conditions and corresponding alerts
document.onkeyup=function(event) {
	var userLetter=event.key;
	guessesLeftCount--;
	guessesArray.push(userLetter)
	if (userWon(userLetter)) {
		alert("You, my friend, are a mutant -- and I have a need of mutants -- desperate need!");

		winsCount++;

		GameOver();
	}
	else if (userLost()) {
		alert("Just because someone stumbles and loses their path, doesn't mean they're lost forever");

		lossesCount++;

		GameOver();
	}
	// display wins and losses after game over
	showWinsAndLosses();
}
