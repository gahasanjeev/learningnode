//create a simple http server

//importing http
const http = require('http');
//describing port and host
const hostName = 'localhost'
const port  = 4000

//creating a simple server with header and end
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1>This is a simple header</h1>')
})


//starting a server at port 4000 of localhost
server.listen(port,hostName,()=>{
    console.log(`server has started at http://${hostName}:${port}`)
})