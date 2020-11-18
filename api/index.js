const datos = require("./datos.json")

//funcion handler
module.exports = (req, res) => {
	//const { name = 'WORDL' } = req.body
	//res.status(200).send(`Hello ${name} `)

	if( Object.keys(req.query).length == 1 ){
		
		result = datos.filter(it => it.ccaa === req.query.ccaa )

		if ( result[0] == undefined )
			result = "Esa comunidad autónoma no existe";

	}else{
		result = "No has indicado el parametro o no es el formato indicado: /api?ccaa=Andalucía"
	}

	res.json({
		body: result[0],
		query: req.query,
	})

}