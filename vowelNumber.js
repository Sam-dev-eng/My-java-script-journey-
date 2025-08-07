function vowelcount(latter){

let lower = latter.toLowerCase;

let count = 0;
for (let i = 0; i < lower.length; i++){
let length = lower.charAt(i);

if (length == 'a' || length == 'e'|| length == 'i' || length == 'o' || length == 'u'){
count++;
}
}
return "Number of vowels are " + count; 

}
let result = vowelcount("ljklkkiiii");
console.log(result);
