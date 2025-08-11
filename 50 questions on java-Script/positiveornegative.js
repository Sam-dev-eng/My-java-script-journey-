const prompt = require('prompt-sync')();

function positiveOrNegative(userInput){
if (userInput > 0) return "Positive";
else
if (userInput <= 0) return "Negative or zero";

else return "Choose a number";

}


let userInput = prompt("Enter a number: ");
console.log(positiveOrNegative(userInput));