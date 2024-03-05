//ASYNC
const { log } = require("console");
const { readFile,writeFile} = require("fs")

//we need to provide a callback when functonality completes just like event listsner which works evrytme we click,mouseover...
//to get result set it as callback
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    // console.log(result)
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        // console.log(result)
        const second=result;
        writeFile('./content/result-async.txt',`Here is the result ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
            console.log("done with this");
        })
    })
})

console.log("starting next one");
//it is callback hell
//output:undefined but creates that file and write first second into it


// it is asynchronous i.e if a task is takng much time it executes next task which takes less time

//callbacks are complex so async await or promises
