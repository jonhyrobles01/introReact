// await permite hacer funciones sicronas en donde el sistema tiene que esperar el resultado para 
// continuar y es obligatorio que tenga async para poder usar el await
const getImage = async() =>{
	try{
		const apiKey = 'lyIjQMQ9md9y0T0EfFBxv2ZFaLJAT6C8';
		const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
		const {data} = await resp.json();
		const {url}  = data.images.original;
		const img    = document.createElement('img');
		img.src      = url;
		document.body.append(img);
	}catch(err){
		// manejo del error
		console.log(err);
	}
}

getImage();