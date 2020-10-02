const express = require('express');
const app = express();             //firing app the server
const port = 8070;                 //default website work on 80 port


//use express router to handle all the requests
app.use('/',require('./routes'));

app.set('view-engine','ejs');
app.set('views','./views');


app.listen(port,(err)=>{
    if (err){
        console.log(`Error in running the server ${error}`);                 //interpolation way of writing the code
    }

    console.log(`Server is running on Port : ${port}`);
})