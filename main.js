var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
//Parametros son: nombre del modelo, schema, nombre de la coleccion
var Articulo = mongoose.model('Articulos', schema, 'articulos');

var articulo = new Articulo({
	name: 'Articulo de prueba',
	author: 'Juan Manuel Del Hoyo',
	body: 'Mensaje de prueba del articulo',
	comments: [
		{
			body: 'Comentario de prueba 1',
			date: Date.now()
		},
		{
			body: 'Comentario de prueba 2',
			date: Date.now()
		}
	],
	meta: {
		votes: 12,
		favs: 120
	}
});

articulo.save(error=>{
	if(error){
		console.log(error);
		process.exit(1);
	}
	console.log("Autor guardado");
	process.exit(0);
});