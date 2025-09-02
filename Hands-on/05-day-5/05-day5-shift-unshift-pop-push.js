const array=['one','two','three','four','five','six'];
console.log(array.shift());
console.log(array); //so the contents of the array variable has now changed. It has mutated.

array.unshift();
array.pop();
console.log(array);
array.push(7);
console.log(array);

