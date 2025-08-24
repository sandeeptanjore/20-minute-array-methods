//split() method splits a string into an array of substring

const today = 'Today was a very productive day';
const string = 'This is going to be fun looking into the string method';

console.log(today.split(' ', 2)); //[ 'Today', 'was' ]
console.log(today.split('', 3)); //[ 'T', 'o', 'd' ]
console.log(today.split(' ', 3)); //[ 'Today', 'was', 'a' ]
console.log(' ');
console.log('***************');
console.log(string.split()); //entire string is brought as is
console.log(string.split(' ', 3));
