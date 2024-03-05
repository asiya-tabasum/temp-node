const { log } = require('console');
const os=require('os');

//info about userystem 
const user=os.userInfo();
console.log(user);

//method returns the system uptime
console.log(`System uptime is : ${os.uptime()}`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(), //total memory
    freeMem:os.freemem(), //free memory
}

console.log(currentOS);