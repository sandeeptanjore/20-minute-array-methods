/**
 * reduce() method executes a function for each value of the array, from LHS to RHS and reduces the array to a single value i.e.
 * condenses all elements into a single output (number, string, object, etc.).
 */

//Example 1: since no starting value is mentioned it is 0 i.e. loop begins at index 1 => value 1
let numbers = [0,1,2,3,4,5,6,7,8,9,10],
    total;

total= numbers.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
},0);

console.log(total);

//Example 2: starting value being 8; index will be at 0 i.e. loop starts at index 0 => value 0

let arrayOfNumbers = [0,1,2,3,4,5,6],
    totalValue;

totalValue= arrayOfNumbers.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
},8);

console.log(totalValue);
