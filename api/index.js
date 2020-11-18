const datos = require("./datos.json")

//funcion handler
module.exports = (req, res) => {
	//const { name = 'WORDL' } = req.body
	//res.status(200).send(`Hello ${name} `)

	if( Object.keys(req.query).length == 1 ){
		
		const { ccaa } = req.query
		result = datos.filter(it => it.ccaa === ccaa )[0]

		if ( result == undefined )
			result = "Esa comunidad autónoma no existe";

	}else{
		result = "No has indicado el parametro o no es el formato indicado: /api?ccaa=Granada"
	}

	res.json({
		body: result.toString(),
		query: req.query,
	})

}
