const http =require('http')
const fs = require('fs')
const port =3000;
const server =http.createServer((req,res)=>{
res.writeHead(200,{'content-type':'text/html'})
fs.readFile('index.html',(error,data)=>{
    if(error){
        res.writeHead(404)
        res.write('error file not found')
    }
    else{
        res.write(data)
    }
    res.end()
})
});
server.listen(port,function(error){
    if(error){
        console,log('somethingg went wrong')
    }
    else{
        console.log('server is listening'+port);
    }
})