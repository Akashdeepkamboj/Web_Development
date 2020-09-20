const express = require('express');
const path = require('path');


const port =8000;

const app = express();    // start up the server automatically





//app has multiple property
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));



//MiddleWare
app.use((req,res,next)=>{
    console.log('1st middleware called');
    next();
})


app.use((req,res,next)=>{
    console.log('2nd Middleware');
    next();
})


var contactList =[
    {
        name: "Akash",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "3245678908765"
    },
    {
        name: "coding",
        phone : "32232432432"
    } 
]


app.get('/',(req,res)=>{
  //  res.send('cool,it is runnning');
    return res.render('home',
    {title:"My contact list",
    contact: contactList});

})

app.post('/create-contact',(req,res)=>{
    contactList.push(req.body);
    //    contactList.push({
//        name:req.body.Name,
//        phone:req.body.Phone
//    })
   return res.redirect('/');
})

app.get('/practice',(req,res)=>{
   console.log("entered in get of practice")
    return res.render('practice',{
        title:'Practice'
    });
})



app.listen(port,err=>{
    if(err){
        console.log('error in running the server');
    }

    console.log('server is up and running');
}) 