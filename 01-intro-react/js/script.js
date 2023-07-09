
const root = document.querySelector('#root');

const name = 'Mundo';
const h1Tag = <h1>Hola { name }</h1>

ReactDom.render(h1Tag, root);