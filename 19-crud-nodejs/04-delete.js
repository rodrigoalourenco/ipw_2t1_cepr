let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "colegio"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Conectado!!!");
    let sql = "DELETE FROM aluno WHERE al_cod = 7";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Numero de registros deletado: " + result.affectedRows + " !!!");
    });
});