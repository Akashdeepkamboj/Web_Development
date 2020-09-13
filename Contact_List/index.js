const express = require('express');
const path = require('path');


const port =8000;

const app = express();    // start up the server automatically
//app has multiple property


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
  //  res.send('cool,it is runnning');

    return res.render('home');
})

app.listen(port,err=>{
    if(err){
        console.log('error in running the server');
    }

    console.log('server is up and running');
})