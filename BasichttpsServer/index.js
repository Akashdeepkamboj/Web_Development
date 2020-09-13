const https = require('http'); 
const port = 8080;
const fs = require('fs');


//request handler function

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type' : 'text/html'});
    
    fs.readFile('./index.html',(err,data)=>{
        if(err){
            console.log('error exists  while reading the file',err);
            return res.end('<h1>Error<h1>')
        }

        return res.end(data);

    })
    
    //res.end('<h1>akash<h1>');
}


const server = https.createServer(requestHandler); // server created


server.listen(port,err =>{           //server start listening on port
    if(err){
        console.log('server not able to start error is coming')
    }

    console.log('server is up and runing');
})
