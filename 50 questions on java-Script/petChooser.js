const prompt = require('prompt-sync')();


function petChooser(){
let userInput = prompt("Enter your favorite pet like 'dog' or 'cat...'");
let userChoice = userInput.toLowerCase();
if (userChoice === "dog")console.log("Woof! Dogs are awesome!") 
else console.log("Cool choice, but i love dogs!");
}

petChooser()
