import { getHeroeById } from './08-imp-exp';

// const promesa = new Promise((resolve, reject) => {
// 	setTimeout(() =>{
// 		// console.log('2 segundos despues')
// 		// resolve();
// 		const heroe = getHeroeById(2);
// 		resolve(heroe);
// 		// reject('No se pudo encontrar el heroe');
// 	},2000);
// });

// promesa.then((heroe)=>{
// 	console.log('heroe',heroe);
// }).catch((err)=>{
// 	console.warn(err)
// });

const getHeroeByIdAsync = (id) =>{
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			// console.log('2 segundos despues')
			// resolve();
			const heroe = getHeroeById(id);
			heroe === undefined ? reject('No se pudo encontrar el heroe') : resolve(heroe);
			// reject('No se pudo encontrar el heroe');
		},2000);
	});
}

getHeroeByIdAsync(1)
	// si solo se resive un parametro y en este caso solo es la impresion en consola no es 
	// necesario hacer la siguiente linea, si no, solo poner console.log
	// .then( (heroe) => { console.log('Heroe', heroe) } )
	.then(console.log)
	.catch(console.warn);