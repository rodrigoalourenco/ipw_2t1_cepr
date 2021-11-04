let fs = require('fs');

fs.unlink('05.2-nodejs-arquivo1.txt', 
    function(err) {
        if(err) {
            throw err;
        }
        console.log("Arquivo Deletado!!!");
    });