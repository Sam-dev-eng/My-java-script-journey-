const prompt = require('prompt-sync')();

function ageRestriction(age){

const minimum = 10;
if (age >= minimum)return "Welcome to the show";
else return "Sorry, you're too Young!"; 
}

let userInput = prompt("Enter your age: ");
console.log(ageRestriction(userInput));