const prompt = require('prompt-sync')();


function arithemeticConsoleApp(){
let totalMilliseconds = Date.now();
let secondsStart = totalMilliseconds / 1000;
 
let count = 0;
let correctAnswer = 0;
let subCorrectAnswer = 0;
while (count != 10){

let numberOne =  Math.floor(Math.random() * 100);
let numberTwo =  Math.floor(Math.random() * 100);

let temp = 0;
if (numberOne < numberTwo){
temp = numberOne;
numberOne =  numberTwo;
numberTwo = temp;
}

let result = numberOne - numberTwo;

let input = prompt(`What is ${numberOne} - ${numberTwo}: `);

if (input == result)correctAnswer++;

let subCount = 0;


while(input != result){
input = prompt(`try again: ${numberOne} - ${numberTwo}: `);
subCount++;

if (subCount == 2){
break;
}
if (input == result)subCorrectAnswer++;
}

count++;
}
let totalScore = correctAnswer + subCorrectAnswer; 

totalMilliseconds = Date.now();
let secondsEnd = totalMilliseconds / 1000;
let totalTime = Math.floor(secondsEnd - secondsStart); 
console.log(`You spent ${totalTime} seconds`);
return "And You Scored: "+totalScore +"/10"; 

}

console.log(arithemeticConsoleApp());


