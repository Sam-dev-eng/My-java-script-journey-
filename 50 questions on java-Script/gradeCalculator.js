const prompt = require('prompt-sync')();

function gradeCalculator(grade){

if (grade >= 90 && grade <= 100) return "A!";
else
if (grade >= 80 && grade <= 89) return "B!";
else 
if (grade >= 70 && grade <= 79) return "C!";
else
if (grade >= 0 && grade <= 69) return "F!" 
else return "Invalid"
}

let input = prompt("Enter Your score: ");
console.log(gradeCalculator(input));