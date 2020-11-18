//const datos = require(datos.js)

//funcion handler
module.exports = (req, res) => {
	//const { name = 'WORDL' } = req.body
	//res.status(200).send(`Hello ${name} `)

	var result = req.query

	if( Object.entries(result).length === 0 && result.constructor === Object ){
		result = "Si hay parametros"
	}else{
		result = "No hay parametros"
	}

console.log(result)
	res.json({
		body: result.toString(),
		query: req.query,
	})


}
