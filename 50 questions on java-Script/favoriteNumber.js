const prompt = require('prompt-sync')();


function favoriteNumber(){

	const favoriteNumber = 7;
	let userInput = prompt("Guess a number ");
	if (userInput == favoriteNumber) console.log("Thats my favorite number");
	else console.log("Nice try, guess again!")
}

 favoriteNumber()