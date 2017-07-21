var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){
    it('listagem json',function(done){        
        request.get('/produtos').
        set('Accept','application/json').
        expect('Content-Type',/json/).
        expect(200, done);
    });        

    it('cadastro de novo produto invalido', function(done){
        request.post('/produtos').
        send({titulo:"",descricao:"Novo livro invalido"}).
        expect(400,done);
    });

    it('cadastro de novo produto valido', function(done){
        request.post('/produtos').
        send({titulo:"Teste produto",descricao:"Novo livro invalido", preco:15.60}).
        expect(302,done);
    });


});
