var process=require('process');



console.log(process.argv);

process.on('beforExit',(code)=>{
    setTimeout(()=>{
        console.log(`Process will exit with code: ${code}`);
        process.exit(12);
    },1000);
})


process.on('exit',(code)=>{
    console.log(`Process exited with code: ${code}`);
});

process.emit('exit',100);
console.log('After this, process will try to exit');
