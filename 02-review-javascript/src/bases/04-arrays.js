const array = [1, 2, 3, 4];

const cpArray = array;

// No usar push
cpArray.push(5);

console.log(array);
console.log(cpArray);

// Hacer copias con el operador spreed

const cpArray2 = [ ...array, 6 ]

console.log(cpArray2);