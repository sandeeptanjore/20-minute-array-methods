/*
* Use the object below and combine the first and last name
*
*/

let people =[
    {firstName: 'Jimmy', lastName: 'Brown'},
    {firstName: 'Cindy', lastName: 'Malcom'},
    {firstName: 'Timothy', lastName: 'Stumps'},
];

//Fetching the first and last names
let listNames = (element,index) =>{
    let names= [element.firstName, element.lastName];
    return names;
};

//console.log(people.map(listNames));

//Using join method to return full name of a person from the people array
let fullNames = people.map((element =>listNames(element).join(" ")));
console.log(fullNames);