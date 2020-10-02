

// Action is when you get a request and handle that for particular url
// List of action in a file is know as controller 


// module.export.function_name = function(req,res){
//     fucntion body;
// }

module.exports.home = function(req,res){
    return res.end('<h1>Express is up for Codeial</h1>');
}


