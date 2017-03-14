var mysql = require('mysql');

function createDBConnection(){	
    return mysql.createConnection({
        host : 'localhost',
        user : 'padrao',
        password : '',
        database : 'casadocodigo_nodejs'
    });
}

module.exports = function(){
    return createDBConnection
}