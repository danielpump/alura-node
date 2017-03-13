module.exports = function(app){	
	app.get('/produtos', function(req,res){
		console.log("Produtos");
		res.render("produtos/lista")
	});	
}

