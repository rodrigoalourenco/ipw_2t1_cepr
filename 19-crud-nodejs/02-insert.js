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
    let sql = "INSERT INTO aluno (al_nome, al_idade, al_curso) VALUES ('Rodrigo', 39, 'TI')";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("1 registro inserido!!!");
    });
});