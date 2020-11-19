const datos = require("./datos.json")

//funcion handler
module.exports = function handler(req, res) {

	if( Object.keys(req.query).length == 1 ){
		
		result = datos.filter(it => it.ccaa === req.query.ccaa )[0]

		if ( result == undefined )
			result = "Esa comunidad autónoma no existe";

	}else{
		result = "No has indicado el parametro o no es el formato indicado: /api?ccaa=Andalucía"
	}

	res.status(200).json(req) 
}