function joiningArrays(numberOne , numberTwo){

 let newArray = [numberOne.length + numberTwo.length];




for (let count = 0; count < numberOne.length; count++){

let arrayOne = numberOne[count];

newArray[count] = arrayOne;
}


for (let count = 0; count < numberTwo.length; count++){

let arrayTwo = numberTwo[count];
newArray[numberOne.length + count] = arrayTwo;

}
return newArray;

}
arrays = [1,3,6,7,8,3];
arrayTwo = [4,6,4,8,9,4,1,2,5,8];
console.log(joiningArrays(arrays,arrayTwo));
