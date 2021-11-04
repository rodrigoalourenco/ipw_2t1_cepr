let fs = require('fs');

fs.rename('05.1-nodejs-arquivo1.txt',
    '08.1-nodejs-arquivo.txt',
    function(err) {
        if(err) {
            throw err;
        }
        console.log("Arquivo Renomeado!!!");
    });