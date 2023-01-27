var fs=require('fs');

// callback = is a task which suppose to be done after reading data from file.
fs.readFile('myContent.txt',(err,data)=>{
    console.log(typeof(err));
    console.log(err);
    if(err)
        throw err;
        console.log(data);
        console.log('====================================================================')
    console.log(data.toString('utf8'));
});