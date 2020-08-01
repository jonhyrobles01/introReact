const persona = {
	nombre    : 'Tony',
	apellido  : 'Stark',
	edad      : 45,
	direccion : {
		ciudad : 'New York',
		zip    : 55321321,
		lat    : 14.32,
		lng    : 34.92,
	}
};

// console.table(persona);
console.log(persona);

// La asignacion de igualdad no es una copia del objeto persona, si no una referencia, 
// y los cambios que se hagan apuntaran al objeto principal
// const persona2 = persona;
// 
// Se debe agregar la siguiente nomenglatura para definir que lo que se va a ser, es una copia del objeto 
// persona, a esto se le llama spreed operators
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);