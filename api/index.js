const datos = require("./datos.json")

//funcion handler
module.exports = (req, res) => {
	//const { name = 'WORDL' } = req.body
	//res.status(200).send(`Hello ${name} `)
	var empty = {}
	var result = req.query

	if( Object.keys(req.query).length == 1 ){
		result = "Si hay parametros"
	}else{
		result = "No has indicado el parametro o no es el formato indicado: /api/<CCAA>"
	}

console.log(result)
	res.json({
		body: result.toString(),
		query: req.query,
	})


}
