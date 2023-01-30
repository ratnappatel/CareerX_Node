const req=require('request');
const fs=require('fs');

const options={
   // url:"https://matfuvit.github.io/UVIT/predavanja/literatura/TutorialsPoint%20node.js.pdf",
    url:"https://jsonplaceholder.typicode.com/albums",
    method:"GET",
    headers:{
        'Accept':'application/pdf',
        'Accept-Charset': 'utf-8',
        
    }
};
fs.open('NodeJS.pdf','w',function(err){
    if(err)
        throw err;
    console.log('File is Created With Write Mode....');

});
req(options,(err,res,body)=>{
    console.log(res);
    let json=JSON.parse(body);
   // console.log(json);
    //console.log(body);
    /* fs.writeFile('NodeJS.pdf',body,function(err){
        if(err)
            throw err;
        console.log('Content is Written to the File ....');

    }); */
})