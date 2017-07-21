
module.exports = function(app){	
    app.get('/produtos',function(req,res){    	
         var connection = app.infra.connectionFactory();
         var produtosDAO = new app.infra.ProdutosDAO(connection);

         produtosDAO.lista(function(err,results){
            res.format({
                html: function(){
                    res.status(200).render('produtos/lista',{lista:results});
                },
                json: function(){
                    res.status(200).json(results);
                }
            });
        });
        connection.end();
	});	

	app.get('produtos/remove',function(){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        var produto = produtosDAO.carrega(id,callback);
        if(produto){
            produtosDAO.remove(produto,callback);
        }

    });

    app.get('/produtos/form',function(req,res){      
         res.render('produtos/form',{errosValidacao:{}, produto:{}});
    }); 

    app.post('/produtos',function(req,res){

        var produto = req.body;

        var validatorTitulo = req.assert('titulo','Titulo é obrigatório');
        validatorTitulo.notEmpty();
        var validatorPreco = req.assert('preco','Formato inválido');
        validatorPreco.isFloat;

        var erros = req.validationErrors();

        if(erros){
            res.status(400);
            res.render('produtos/form',{errosValidacao:erros, produto:produto});
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        
        produtosDAO.salva(produto, function(erros,resultados){
            res.redirect('/produtos');
        });
        connection.end();
    });

}

