let http = require('http');

http.createServer(function(resquest, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('O aluno nao acredita!!!');
}).listen(8080);