let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "colegio"
});

con.connect(function(err) {
    if(err) throw "Erro ao conectar no banco de dados: " + err;
    con.query("SELECT * FROM aluno WHERE al_idade > 18", 
    function(err, result, fieds) {
        if(err) throw "Erro ao buscar dados: " + err;
        //console.log(result);
        result.forEach(registro => {
            console.log(registro.al_nome);
        });
    })
})