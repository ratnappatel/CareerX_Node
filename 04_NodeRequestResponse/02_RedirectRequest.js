var http=require('http');

http.createServer(function(req,res){
    if(req.url === '/')
    {
        res.writeHead(301,{
            Location:'https://jsonplaceholder.typicode.com/users'
        }).end();
    }
    else{
        res.write('Welcome From Node Server..');
        res.end();
    }
}).listen(5000);
console.log('Server Started Listening at 5000');