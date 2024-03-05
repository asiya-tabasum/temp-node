//file system : 1.Asynchronous (non-blocking) 2.SYnchronous (blocking)

//sync
const { readFileSync ,writeFileSync } = require("fs")

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

console.log(first,second);

//to create new file writefilesync
//if already exists , it overwrite
//path,value
writeFileSync('./content/result-sync.txt',
`the result :${first},${second}`,
{flag:'a'} //to append
);



