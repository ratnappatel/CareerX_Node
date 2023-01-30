var EventEmitter=require('events').EventEmitter;

var logger=new EventEmitter();

logger.on('MyClickEvent',function(msg){
    console.log('MyClickEvent : '+msg);
});

logger.emit('MyClickEvent','This is the first Click');
logger.emit('MyClickEvent','This is the second Click');