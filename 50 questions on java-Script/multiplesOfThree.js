
function multiplesOfThree(){
let line = " "
for (let count = 1; count < 16; count++){
if (count % 3 == 0){ 
line = line + count +" ";
}
}
console.log(line);
}

multiplesOfThree()
