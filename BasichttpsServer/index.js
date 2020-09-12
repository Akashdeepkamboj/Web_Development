const https = require('http');
const port = 8080;


const server = https.createServer();


server.listen(port,err =>{
    if(err){
        console.log('server not able to start error is coming')
    }

    console.log('server is up and runing');
})