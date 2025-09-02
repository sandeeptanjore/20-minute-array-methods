//toString() => converts a number to a string

let numberToString= 800;

console.log(typeof numberToString); //number

console.log(numberToString.toString()); //800

console.log(typeof numberToString.toString()); //string

//toFixed()

let money=35485.33;
console.log(typeof money); //number
convertedMoney= money.toFixed(2);
console.log(convertedMoney);
console.log(typeof convertedMoney);

console.log(money.toFixed(4));
console.log(money.toFixed(0));

//Number() => converts a string to a number

let stringNumber="100"
console.log(Number(stringNumber));
console.log(typeof Number(stringNumber));

//parseInt() => parses a string and returns a whole number

console.log(parseInt("2.33"));
console.log(parseInt("3.22"));
console.log(parseInt("3.96"));

//parseFloat() => parses a float and returns a number
console.log(parseFloat("3.45"));