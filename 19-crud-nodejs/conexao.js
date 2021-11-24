let mysql = require('mysql');

module.exports = function(mysql) {
    let conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "colegio"
    });
    return conexao;
};