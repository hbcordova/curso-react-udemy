const people = {
    name: 'Heber',
    lastname: 'Cordova',
    age: 22
};

// No hacer copias de la siguiente manera: const cpPeople = people;
// Crear una copia de un objeto usando el operador spreed

const cpPeople = { ...people };
cpPeople.name = "Maria";
cpPeople.age = 25;

// console.table(people);
console.log(people);
console.log(cpPeople);