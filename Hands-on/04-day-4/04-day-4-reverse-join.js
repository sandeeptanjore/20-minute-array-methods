const array = ['r', 'e', 't', 'u', 'p', 'm', 'o', 'c'];
let arrayReverse = array.reverse();
console.log(arrayReverse);

console.log(array.join()); //this becomes c,o,m,p,u,t,e,r
console.log(array.join('-')); //this becomes c-o-m-p-u-t-e-r
console.log(array.join(' ')); //this becomes c o m p u t e r
console.log(array.join('|')); //this becomes c|o|m|p|u|t|e|r
