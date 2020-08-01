// variables y constantes
const nombre   = 'Jonathan';
const apellido = ' Robles';

let valorDado = 5;

console.log(nombre, apellido, valorDado);
// var no se debe de usar ...
if(true){
	// las varables dentro de las condiones solo viven adentro de ellas
	let valorDado = 6;
	console.log(valorDado);
}

console.log(valorDado);