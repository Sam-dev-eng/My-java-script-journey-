function getScore (score){
do{
let score = parseInt(prompt("Enter a number"), 10);
if (score < 0 || score > 100)
console.log("Invalid try again");

}while (score < 0 || score > 100);

return score;
}

function calculateGrade(number){
let grade; 
if (number >= 80){
grade = "A"; 
}else
if (number >= 60){
grade = "B";
}else
if (number >= 40){
grade = "C";
}else
if (number >= 20){
grade = "D";
}else{
grade = "F";
}
return grade;
}

function getFeedback(grade){
if (grade == "A"){
console.log("Excellent performance");
}else
if (grade == "B"){
console.log("Good job, Keep improving");
}else
if (grade == "C"){
console.log("Fair effort, keep working on it");
} else
if (grade == "D"){
console.log("You can do better, don't give up");
}else {
console.log("Needs improvement, Ask for help");
}
return grade;
}

function main(num){
let back;
do {
let score = getScore(num);
let grade = calculateGrade(score);
console.log("Your Grade is : " + grade);
let feedback = getFeedback(grade);

let back = parseInt(prompt("Try another score ? (yes/no):"), 10);

 
}while (back.toLowerCase !== "no");
console.log("Good bye fam");
}






let name = main(40);
console.log(name);