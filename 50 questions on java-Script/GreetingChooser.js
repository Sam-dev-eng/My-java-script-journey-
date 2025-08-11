const prompt = require('prompt-sync')();


function greetingChooser(){

let userInput = prompt("Enter your name:");
let name = userInput.toLowerCase();
if (name === "alex")console.log("Hello, friend!");
else console.log("Hi, stranger");
}

greetingChooser()
