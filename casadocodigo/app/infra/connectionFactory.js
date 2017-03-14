var mysql = require('mysql');

module.exports = function(){	
	console.log('Criou');
    return mysql.createConnection({
        host : 'localhost',
        user : 'padrao',
        password : '',
        database : 'casadocodigo_nodejs'
    });
}

