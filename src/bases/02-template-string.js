//Uso del Template string 
const nombre   = 'Jonathan';
const apellido = 'Robles';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
	return 'Hola ' + nombre;
}

console.log(`Este es un texto : ${getSaludo(nombre)}`);