/*
* Take this array:
* let dayOfTheMonth = ["3","15","22","2","8","30","23"]
* and filter through it returning all the days of the month that come after 15th and return it in this format:
* 22 has an index of 2
* 30 has an index of 5
* 23 has an index of 6
* */

let daysOfTheMonth = ["3","15","22","2","8","30","23", "31"],
    datesAfterFifteenth;

datesAfterFifteenth= daysOfTheMonth.filter((dates,index) =>{
    if (Number(dates>15)){
        console.log(`Date: ${dates} is at index position: ${index}`);
        return true;
    }
    return false;
});

// console.log(datesAfterFifteenth);
datesAfterFifteenth;

/*
* From an array of numbers, return only the odd numbers.
* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
* */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers;

oddNumbers= numbers.filter(numbers => numbers % 2 !== 0);
console.log(`Odd numbers from the numbers array are: ${oddNumbers}`);