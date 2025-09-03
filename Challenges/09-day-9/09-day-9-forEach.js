//Push the array of elements of numbers into the empty newNumbers array using forEach method
let numbers = ["5", "4","3","2","1","0"],
    newNumbers=[];

//console.log(newNumbers.push(numbers));

numbers.forEach(number => {
   (newNumbers.push(number));
});

console.log(newNumbers);

// numbers.forEach((number, index,array) => {
//     console.log('Number: ' + number+ " Index: " + index +" Array: " + array);
// })

/**
 * Produce the following result:
 * Kiwi is index 0
 * Apple is index 1
 * ... and so on
 */

 let fruits = ["kiwi", "apple", "banana","pear", "grapes", "lime", "orange","lemon"];

 fruits.forEach((fruit, index) =>{
     console.log(fruit.charAt(0).toUpperCase() + fruit.slice(1) + " is in index " + index);
 });
