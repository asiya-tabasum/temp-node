const http=require('http');

// //req request res response
// //createServer has a callback with two objects req and res
// const server=http.createServer((req,res)=>{
//     //to get url what endpoint is client requesting
//     res.write('Welcome to our home page')
//     res.end() //end request
// })

// server.listen(5000)



const server=http.createServer((req,res)=>{
    //to get url what endpoint is client requesting
    if(req.url==='/'){  //url request is home page
        res.end("welcome to home page")
    }
    if(req.url==='/about'){
        res.end('here is out short history')
    }
    //what if user request content page hich do no exists
    //so we do default response
    res.end(
        `<h1>OOPS!<h1>
        <p>We can't seem to find page ur looking for</p>
        <a href="/">back home</a>`
    )
})

server.listen(5000)