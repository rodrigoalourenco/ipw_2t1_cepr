let fs = require('fs');

fs.writeFile('05.2-nodejs-arquivo1.txt', 
    "Atualizando o arquivo!!",
    function(err) {
        if(err) {
            throw err;
        }
        console.log("Arquivo Atualizado!!!");
    });