/** What are the two ways of getting the last element of the array only
 * (which is grass) */

const newArray = ['fire', 'water', 'ice', 'steam', 'sand', 'grass'];

// console.log(newArray.slice(5));
// console.log(newArray.slice(-1));

/** How do we get the last two with the negative number */

console.log(newArray.slice(-2));

/** Final challenge:
 * How do we get "water", "ice" and "steam" with 2 negative numbers as the arguments start and end?
 */

console.log(newArray.slice(-5, -2));
