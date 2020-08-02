const persona = {
	nombre : 'Tony',
	edad   : 45,
	clave  : 'Ironman',
	rango  : 'Soldado',
}

const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({nombre, edad, rango = 'Capitán'}) =>{
	// console.log(nombre, edad, rango);
	return {
		nombreClave : clave,
		anios       : edad,
		latlng : {
			lat : 14.1232,
			lng : -12.3232,
		}
	}
}

const avenger = useContext(persona);
const {nombreClave, anios, latlng:{lat, lng}} = avenger;
console.log(nombreClave, anios);
console.log(lat,lng);