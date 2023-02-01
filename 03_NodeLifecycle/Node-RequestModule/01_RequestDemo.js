const req=require('request');

req('https://nodejs.org/api/events.html#class-eventemitter',(err,res,body)=>{
    console.log(body);
});