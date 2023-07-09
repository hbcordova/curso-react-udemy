// Funciones en JavaScript

// No usar esta forma, se puede sobreescribir la funcion para almacenar valores

function greet(name) {
    return `Hello, ${name}`;
}

console.log(greet('Heber'));

// Crear funciones almacenadas en variables constantes para no permitir la mutacion

const greeting = function (name) {
    return `Hi, ${name}!!`;
}

// O usar arrow functions para una mejor lectura

const sayBye = (name) => `Bye, ${name}!`;

const getUser = (name, lastname) => ({ name: name, lastname: lastname});

console.log(sayBye('Heber'));
console.log(getUser('Heber', 'Cordova'));