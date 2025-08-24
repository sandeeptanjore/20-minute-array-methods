/**Now it's your turn */

const string = "Now it's my turn to try it out";

//Try to produce only a new string of out
console.log(string.substring(27, 30));

//Try to produce the last t of the entire string using a negative number
console.log(string.slice(-1)); //substring does not work with negative numbers/indices

//So in the above string, start with the letter "m" of my and extrat all characters up until the "r" in try
//output should be my turn to t
console.log(string.substring(9, 21));
