var http = require('http');

var server=http.createServer(function(request,response){
    response.write('<html><body><h1>Hello From Node Server</h1></body></html>');
})

server.listen(5050);
console.log('My Server Staretd on Port 5050')