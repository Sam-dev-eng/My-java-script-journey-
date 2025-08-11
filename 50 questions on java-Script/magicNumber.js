const prompt = require('prompt-sync')();

function magicNumber(){
	const magicNumber = 42;
	let number = prompt("Enter a number ");
	while (number != magicNumber){
		number = prompt("Keep looking ");
		}
console.log("You found the Magic number");

}

magicNumber()