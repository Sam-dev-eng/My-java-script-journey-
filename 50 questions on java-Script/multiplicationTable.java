function MultipplicationTable(number){

let multiple = number;
let result = 0;
for (let count = 1; count < number + 1; count++){
result = multiple * count;

console.log(multiple + " X " + count + " = " + result)
}


}

MultipplicationTable(6);