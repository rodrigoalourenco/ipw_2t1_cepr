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
    let sql = "UPDATE aluno SET al_nome = 'Lourenco' WHERE al_cod = 7";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log(result.affectedRows + " registro(s) afetado(s)!!!");
    });
});