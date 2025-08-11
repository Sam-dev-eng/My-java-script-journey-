const prompt = require('prompt-sync')();

function guessTheAnimal(userChoice){
const myAnimal = "dog";
let input = userChoice.toLowerCase();
if (input === myAnimal) return "Correct! its a dog!";
else return "Nope, its a dog!"

}


let userInput = prompt("Guess an animal ");
console.log(guessTheAnimal(userInput));