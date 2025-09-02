/**
 * Challenge: Try to get:
 * "r] [e] [t] [u] [p] [m] [o] [c"   <---- be sure there are spaces
 */

const array = ['r', 'e', 't', 'u', 'p', 'm', 'o', 'c'];
console.log(array.join('] ['));

/**
 * Challenge: Take this string:
 * "tnellecxe"
 *  and reverse it into a new string called "excellent"
 * */

let newString = "tnellecxe"
console.log(newString.split('').reverse().join(''));

let newArray = ["tnellecxe"];
console.log(newArray[0].split('').reverse().join(''));

/**
 * Bonus challenge: Take this string:
 * "today work great"
 * and reverse it into a new string saying "Great work today"
 * */

const todaysWork = "today work Great";

// for(let i=0; i<todaysWork.length; i++){
//    console.log(`Index: ${i}, Value: ${todaysWork[i]}`);
// }


let firstVariable,
    secondVariable,
    thirdVariable,
    finalResult;

firstVariable = todaysWork.slice(-5);
secondVariable = todaysWork.slice(-10,-6);
thirdVariable = todaysWork.slice(-16,-11);
finalResult = firstVariable+' '+ secondVariable+' '+ thirdVariable;
console.log(finalResult);


//A better solution:
const finalAnswer = todaysWork.split(' ');
console.log(finalAnswer.reverse().join(' '));

