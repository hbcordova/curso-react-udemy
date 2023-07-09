// Desestructuración de objetos
// Vease: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const person = {
    name: 'Heber',
    lastname: 'Cordova',
    edad: 22,
    address: {
        lat: 12.189,
        lng: 20.854
    }
};

const { name, lastname, edad: age, address: {lat, lng} } = person;

console.log(name, lastname, age, lat, lng );

const user = {
    name: 'Maria',
    lastname: 'Cordova',
    age: 22
};

const getUser = ({ name, lastname, age}) => `${name} ${lastname} | ${age}`;

console.log(getUser(user));