// Operador ternario

const activo = true;

/* let mensaje = '';

if (activo) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
} */

// const mensaje = activo ? 'Activo' : 'Inactivo';

// Si activo es true entonces devuelve 'Activo' caso contrario devuelve false
const mensaje = activo && 'Activo';

console.log(mensaje);