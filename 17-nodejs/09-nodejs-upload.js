let http = require('http');
const PORT = 8080;

http.createServer(function(req, resp) {
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.write('<form action="fileupload" method="post" enctype="multpart/form-data">');
    resp.write('<input type="file" name="fileupload"><br>');
    resp.write('<input type="submit"');
    return resp.end();
}).listen(PORT, function() {
    console.log('Servidor Executando: http://localhost:%d', PORT);
})

