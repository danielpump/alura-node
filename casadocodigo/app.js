var express = require('express');
var app = require ('./config/express')();

app.get('/produtos', function(req,res){
	console.log("Produtos");
	res.render("produtos/lista")
});

app.listen(3000, function(){
	console.log("Em exceução");
});
