//Math.round() ==> this method returns the value of a number rounded to the nearest integer

let number = 12.8;
let number1= 12.2;

console.log(Math.round(number));
console.log(Math.round(number1));

//Now try these numbers and geta feel for how it rounds to the nearest integer
let number2=12456.33211;
let number3=192.88111;

console.log(Math.round(number3)); //193
console.log(Math.round(number2)); //12456

//Math.ceil ==> returns a value rounded up to its nearest integer
console.log(Math.ceil(number3));//193
console.log(Math.ceil(number2)); //12457
console.log(Math.ceil(4.1)); //returns 5
console.log(Math.ceil(4.9)); //returns 5

//Math.floor ==> returns a value rounded down to its nearest integer
console.log(Math.floor(1)); //returns 1
console.log(Math.floor(14.1)); //returns 14
console.log(Math.floor(10.9)); //returns 10

//Math.min() ==> It returns the lowest number of numbers passed to it
let array =[3,2,5.4,10,3.4,11,20,1,0];
console.log(Math.min(4,2,9));
console.log(Math.min(...array));

//Math.max() ==> It returns the highest number of numbers passed to it
console.log(Math.max(4,2,9));
console.log(Math.max(...array));



