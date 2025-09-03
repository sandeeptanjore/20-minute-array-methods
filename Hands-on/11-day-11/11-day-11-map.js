/**
 * map() method creates a new array with the results of calling a function for every array element i.e.
 * transforms each element, returns a new array of same length.
 */

//Example 1:

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    result;

result= numbers.map(element => (element *2));
console.log(result);

//Example 2: Take the below array and instead of creating a callback function, pass the Math.sqrt object method as a parameter and create a new array called
//squareRootArray

let numbers1 = ["9","16","25","400", "900"],
    squareRootArray;

// //One way of doing
squareRootArray = numbers1.map(element => Math.sqrt(element));
console.log(`1st way correct but suboptimal ==> Square root of the array is: ${squareRootArray}`);

//Second and best way of doing
squareRootArray = numbers1.map(Math.sqrt);
console.log(`2nd and best way of doing this is: ==> Square root of the array is: ${squareRootArray}`);


