var http=require('http');
var url=require('url');
var fs=require('fs');
var uc=require('upper-case');

//Create a Server which reads files content and display them to the browser
http.createServer((req,res)=>{
    var q=url.parse(req.url,true);
    var fname="."+q.pathname;

    fs.readFile(fname,(err,data)=>{
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 File Not Found..")
        }
        else
        {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("<p>"+uc.upperCase(data.toString('utf8'))+"</p>");
            return res.end();
        }
    });
}).listen(5000);
console.log('Server Started Listening on Port 5000');