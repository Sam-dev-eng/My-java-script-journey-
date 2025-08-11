const prompt = require('prompt-sync')();

function passwordChecker(input){

const password = "secret123";
if(input != password) return "Access denied";
else return "Access Granted";
}

let userInput = prompt("Type a password: ");
console.log(passwordChecker(userInput)); 