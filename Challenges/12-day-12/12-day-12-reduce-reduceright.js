/**
 * Challenge: get the population of 4 states
 * Answer should be:70,133,000
 *
 * */

let population =[
    {state:'California',
    pop:39780000
    },
    {state:'Virginia',
        pop:8412000
    },
    {state:'Florida',
        pop:20610000
    },
    {state:'Maine',
        pop:1331000
    }
],
    totalPopulation,
    stateNames;

stateNames = population.map((element,index) =>element.state);
stateNames = stateNames.join(',');

totalPopulation = population.reduce((accumulator, current) => {
    return accumulator + current.pop;
},0);

//console.log(totalPopulation);

console.log(`Total population of ${stateNames} is ${totalPopulation.toLocaleString('en-US')}`);