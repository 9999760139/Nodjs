const EventEmitter = require('events'); 


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
    console.log('please turn off the motor!');
    setTimeout(() =>{
        console.log("please turn off the motor its a general reminder");
    },3000);
})

console.log("the script is running")
myEmitter.emit('WaterFull');
console.log('the script is still runing')
