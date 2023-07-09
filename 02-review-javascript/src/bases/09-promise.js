// Promesas, documentado en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Por defecto son asincronas
// Primero se ejecuta todo lo sincrono y despues lo asincrono

import { getHeroeById } from '../bases/08-imp-exp';

/* const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {

        const heroe = getHeroeById(1);
        resolve(heroe);
        // reject('No se pudo encontrar el heroe!');

    }, 2000 );
}); 


promesa
    .then(heroe => console.log(heroe))
    .catch(error => console.warn(error)) */

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
    
            const heroe = getHeroeById(id);

            if (heroe) resolve(heroe); 
            else reject('No se pudo encontrar el heroe!');
    
        }, 2000 );
    }); 
}

getHeroeByIdAsync(20)
    .then(console.log) // Por defaul log & warn agarran el primer elmento
    .catch(console.warn)