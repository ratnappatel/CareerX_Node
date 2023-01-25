var http=require('http');

var server=http.createServer(function(req,res){
    if(req.url == '/')
    {
        res.write('<html><body><h1>Hi Everyone !....</h1></body</html>');
        res.end();
    }
    else if(req.url == '/user')
    {
        res.write('<html><body><h1>This is User Page....</h1></body</html>');
        res.end();
    }
    else if(req.url == '/admin')
    {
        res.write('<html><body><h1>This is Admin Page....</h1></body</html>');
        res.end();
    }
})


server.listen(5000);
console.log('Node Server Listening at 5000')