var http=require('http');

http.createServer((req,res)=>{

    req.on('data',(chunk)=>{
        res.write(chunk);
        console.log(chunk.toString('utf8'));
        res.end();
    })
}).listen(5000);
console.log('Server Listening @ 5000');