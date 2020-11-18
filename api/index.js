//const datos = require(datos.js)

//funcion handler
module.exports = (req, res) => {
	//const { name = 'WORDL' } = req.body
	//res.status(200).send(`Hello ${name} `)
	var empty = {}
	var result = req.query

	if( result != empty ){
		result = "Si hay parametros"
	}else{
		result = "No hay parametros"
	}

console.log(result)
	res.json({
		body: result.toString(),
		query: Object.keys(req.query).length,
	})


}
