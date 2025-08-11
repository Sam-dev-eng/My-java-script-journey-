const prompt = require('prompt-sync')();

function evenorodd(){

let userInput = prompt("Enter a number");
if (userInput % 2 == 0) console.log("Even!");
else console.log("Odd!");

}

evenorodd();