//charAt(): we get the character of an index number

const position='I want to search for positions within this string';

console.log(position);
console.log(position.charAt(15)); // h
console.log(position.charAt(0)); //I

//indexOf(): returns the position of a specified value from a string

const sleep = "I am going to go to sleep after this";
console.log(sleep);
console.log(sleep.indexOf("to")); //11

//indexOf(): returns the last position of a specified value from a string
console.log(sleep.lastIndexOf("to")); //17

console.log(sleep.indexOf("g"));//5
console.log(sleep.lastIndexOf("g"));//14
console.log(sleep.lastIndexOf("g",2));