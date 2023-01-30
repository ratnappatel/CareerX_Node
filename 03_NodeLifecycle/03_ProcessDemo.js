const prc=require('process');
console.log(prc.argv);
var x=10;
if(x<100)
    console.log(prc.argv);
else
    prc.exit();

console.log("I may/May-not be visible");