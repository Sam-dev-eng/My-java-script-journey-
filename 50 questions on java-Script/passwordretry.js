const prompt = require('prompt-sync')();

function passwordRetry(){

let correctPasswrd = "python";
let input = prompt("Enter Your Password! ");
let count = 0;
while (input != correctPasswrd){
input = prompt("Try again! ");
count++
if (count == 2){
break;
}

console.log(count);
}
if (count == 2 && input != correctPasswrd)console.log("Locked out! ");
else console.log("Success!");

}   

passwordRetry();                                                                                                                                                                                                                                                               