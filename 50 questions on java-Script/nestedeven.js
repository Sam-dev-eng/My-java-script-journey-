function nestedEvenChecker(){
let line = "";
for (let count = 1; count < 11; count++){
	if (count % 2 == 0){
		line = line + count + " ";
}
}
console.log(line);

}

nestedEvenChecker();