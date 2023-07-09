// import heroes, { owners } from '../datos/heroes.js'; // .js es opcional, por defecto busca un archivo .js
import heroes from '../datos/heroes.js'; // .js es opcional, por defecto busca un archivo .js

// Atajo para importar: imp + tab

// Para obtener la informacion de otro archivo primero hay que exportar dicha informació
// Ejem: export const heroes = {...};

// console.log(heroes);

const getHeroeById = (id) => { 
    // Metodo find de javascript array recibe una funcion para busqueda
    // Documentado en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    return heroes.find(heroe => heroe.id === id);
 };

// console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => {
    // Metodo filter de javascript array devuelve varios valores
    // Documentado en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    return heroes.filter(heroe => heroe.owner === owner);
}

// console.log(getHeroeByOwner('DC'));

// console.log(owners);

export {
    getHeroeById,
    getHeroeByOwner
};