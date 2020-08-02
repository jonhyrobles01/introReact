const saludar = function saludar(nombre){
	return `Hola, ${nombre}`;
}

const saludar2 = (nombre) =>{
	return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo!`;

console.log(saludar2('Goku'));
console.log(saludar3('Vegueta'));
console.log(saludar4());

// Si se quiere minificar el codigo y no escribir el return para el objeto de debe agregar el parentesis
// para que javascript pueda interpretar que se quiere retornar un objeto
const getUser = () => ({
		uid      : 'ABC123',
		username : 'El_Papi1502'
});

const user = getUser();

console.log(user);

// tarea
// 1.- Transformar a una funcion de flecha
// 2.- Tiene que retornar un objeto implicito
// 3.- Pruebas
function getUsuarioActivo(nombre){
	return {
		uid      : 'ABC123',
		username : nombre
	}
}

const getUsuarioActivo2 = (nombre) => ({
	uid      : 'ABC123',
	username : nombre
});

const usuarioActivo = getUsuarioActivo2('Fernando');
console.log(usuarioActivo);
