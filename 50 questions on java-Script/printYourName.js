const prompt = require('prompt-sync')();

function printYourName(){
let name = prompt("Enter your Name ");
for (let count = 0; count < 3; count++){
	console.log(name+"!");	
	}
}

printYourName();