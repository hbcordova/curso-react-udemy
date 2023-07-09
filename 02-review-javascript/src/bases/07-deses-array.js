// Desestructuracion de arreglos
// Vease: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const array = ["ABC", 123];

const [, numeros] = array;
console.log(numeros);

const [letras] = array;
console.log(letras);

const usState = (value) => ([value, () => `Hello ${value}`]);

const [name, setName] = usState('Heber');

console.log(name);
console.log(setName());