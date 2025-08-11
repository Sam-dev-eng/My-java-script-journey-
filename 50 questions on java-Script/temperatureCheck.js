const prompt = require('prompt-sync')();

function temperatureCheck(temperature){
if (temperature > 30) return "Hot";
else 
  if (temperature > 15 && temperature <= 30) return "Nice";
else
    return "cold"; 

}

let userInput = prompt("Enter the Temperature ");
console.log(temperatureCheck(userInput));

