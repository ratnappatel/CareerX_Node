var fs=require('fs');

var content="This is File is Created By Node JS";
// if file does not exists ==> gets created
fs.open('myContent.txt','w',function(err){
    if(err)
        throw err;
    console.log('File is Created With Write Mode....');

});
//content="I am Replacing Existing Content";
fs.writeFile('myContent.txt',content,function(err){
    if(err)
        throw err;
    console.log('Content is Written to the File ....');

});

fs.appendFile('myContent.txt','I am Appended as New Content',function(err){
    if(err)
        throw err;
    console.log('Content are Appended to the File ....');

})