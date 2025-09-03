/**
 * filter () creates a new array from the original array elements that have passed a certain condition.  It leaves out cases that do not pass
 */

//Example 1: fetch all adults

let age = ["35", "14","52", "21", "11", "80", "18","17"],
    adult,
    workingAdults,
    arrayIndexPositions;

adult = age.filter(number=> Number(number)>=18);
console.log(adult); //[ '35', '52', '21', '80', '18' ]

adult = age.filter(element =>{
    return Number(element) >=35;
})

console.log(adult); //[ '35', '52', '80' ]


//Example 2: fetch all ages between 18 and 60

workingAdults = age.filter(activeWorkers => {
    return Number(activeWorkers)>=18 && Number(activeWorkers)<=60
});

console.log(workingAdults); //[ '35', '52', '21', '18' ]

//Example 3: array of index positions for all the elements that are 18 and up

arrayIndexPositions = age.filter((element, index) =>{
    if (Number(element>=18)){
        console.log(`Element: ${element} is at index: ${index}`);
        return true;
    }
    return false;
});

arrayIndexPositions;

