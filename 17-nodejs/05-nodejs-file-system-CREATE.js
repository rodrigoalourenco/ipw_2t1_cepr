let fs = require('fs');

fs.appendFile('05.1-nodejs-arquivo1.txt', "OLA JOVENS!!!",
    function(err) {
        if(err) {
            throw err;
        }
        console.log("Arquivo Salvo!!!");
    });

    fs.appendFile('05.2-nodejs-arquivo1.txt', "w",
    function(err, file) {
        if(err) 
            throw err;
        console.log("Arquivo 2 Salvo!!!");
    });    
