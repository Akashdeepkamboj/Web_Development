// require the library

const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/contacts_list_db');


//acquire the connection
const db = mongoose.connection;


//error
db.on('error',console.error.bind(console,"Error connecting to DB"));

//up and running then print the messages
db.once('open', function(){
    console.log('Successfully connected to the database');
})