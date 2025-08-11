const prompt = require('prompt-sync')();


function trafficLight(usersChoice){
let input = usersChoice.toLowerCase();
if (input == "red") return "Stop";
else
if (input == "green") return "Go";
else 
if (input == "yellow") return "Wait";

else return "Choose Red , Green or Yellow";

}

let userInput = prompt("Pick a color: ");
console.log(trafficLight(userInput));




