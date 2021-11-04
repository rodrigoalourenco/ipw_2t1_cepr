let http = require('http');
let dt = require('./03.1-nodejs-my-module');

http.createServer(function(resquest, response){
    response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    response.write('A data e hora atual é: ' + dt.minhaData());
    response.end();
}).listen(8080, function() {
    console.log("Servidor ligado: http://localhost:%d", 8080);
})