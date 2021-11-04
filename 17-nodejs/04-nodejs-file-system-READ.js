let fs = require('fs');
let http = require('http');
const PORT = 8080;

http.createServer(function(req, res){
    fs.readFile('04.1-nodejs-arquivo1.html', 
        function(err, data) {
            res.writeHead(200, 
                {'Content-Type' : 'text/html; charset=uft8'});
            res.write(data);
            return res.end();
        });
}).listen(PORT, function() {
    console.log("Servidor ligado: http://localhost:%d", PORT);
})