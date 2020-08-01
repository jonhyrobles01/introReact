// Arreglos JS
// Esta es una manera de crear arreglos pero no es adecuada lo mejor es solo definirla con []
// const arreglo = new Array();
const arreglo = [1,2,3,4];
// el push no se deberia de usar ya que el push modifica el objeto pricipal, cuando se quiera insertar
// algun valor se debe usar el operador spreed
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// 

let arreglo2 = [...arreglo,5]

const arreglo3 = arreglo2.map((x)=>{
	return x * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);