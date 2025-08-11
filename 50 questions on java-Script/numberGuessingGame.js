const prompt = require('prompt-sync')();

function numberGuessingGame(){
	let secret = 8;
	let userInput = prompt("Enter a number ");
	while (userInput != secret){
		userInput = prompt("Try again ");
		}
console.log("Correct");

}

numberGuessingGame()