const express = require('express');
const path = require('path');
const port =8000;

const db = require('./Config/mongoose');
const Conact =require('./models/contact');


const app = express();    // start up the server automatically





//app has multiple property
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('asset'));                     //expree middleware for the static file 
app.use(express.urlencoded({extended:true}));          //express middleware to decode the response coming from form 




// //MiddleWare
// app.use((req,res,next)=>{
//     console.log('1st middleware called');
//     next();
// })


// app.use((req,res,next)=>{
//     console.log('2nd Middleware');
//     next();
// })


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
   //code of finding the data of the contact list from database
   Conact.find({},(err,contact_data) => {
    if(err){
        console.log('error in getting data from the database');
        return;
    }
    return res.render('home',{
        title:"My Contact list",
         contact : contact_data
    })
}) 

  //code of storage the data in array of contact list
    /* res.send('cool,it is runnning');
    return res.render('home',
    {title:"My contact list",
    contact: contactList});
*/
})

app.post('/create-contact',(req,res)=>{
    Conact.create({
        name:req.body.name,
        phone: req.body.phone
    }, function (err, newContact){
        if(err){
            console.log('error in creating contact!');
            return;
        }

        console.log('**********',newContact);
    });
   return res.redirect('/');

    //   contactList.push(req.body);
    //    contactList.push({
//        name:req.body.Name,
//        phone:req.body.Phone
//    })


})
 

//with query with id object from the  
app.get('/delete-contact',(req,res)=>{
   
    //Get ID from the query url
    const id = req.query.id;
    console.log(req.query.id);
    //Find the element and delete it from DB and Front End
    Conact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('not able to delete the contact there is some issue coming')
            return;
        }
        return res.redirect('back')
    })
        

   
    






//     //get the query from the url
//     let Phone = req.query.phone;
//     //find the index in the array
//     var contactIndex = contactList.findIndex( contact =>  contact.phone == Phone)

//     console.log("contact which needs to be deleted found at "+ contactIndex);
// //delete the element from the array using the splice function
//     if(contactIndex != -1){
//         contactList.splice(contactIndex,1);
//     }

//     return res.redirect('back')
})


// with string params 
// app.get('/delete-contact/:phone',(req,res)=>{
    
//     let phone ='';
//     console.log(req.params)
// })


//app.get('')

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