//const datos = require(datos.js)

//funcion handler
module.exports = (req, res) => {
	//const { name = 'WORDL' } = req.body
	//res.status(200).send(`Hello ${name} `)
console.log(req.query)
	res.json({
		body: req.body,
		query: req.query,
		cookies: req.cookies,
	})


}
