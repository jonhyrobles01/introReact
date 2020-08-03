const personajes = ['Goku', 'Vegueta', 'Trunks'];

const [ p1, p2, p3] = personajes;

console.log(p1);

const retornaArreglo = () => {
	return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// tarea
// 1.- el primer valor del arr se llama nombre
// 2.- se llamará setNombre
// 
// 
 const useState = (valor) => {
 	return [valor, () =>{ console.log('Hola Mundo!') }];
 }

 const [ nombre, setNombre ] = useState('Goku');

 console.log(nombre);
 setNombre();