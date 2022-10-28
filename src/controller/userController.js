const users = require("../model/users");

const userRetrieve = async (req, res) => {
   const user =  users.find(function(err, data) {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send(data);
        }
    });  
}

const userCreate = async (req, res) => {
    var newUser = new users();
   newUser.firstName = req.body.firstName;
   newUser.dob = req.body.dob;
   newUser.address = req.body.address;
   newUser.phoneNumber = req.body.phoneNumber;
   newUser.state = req.body.state;
   newUser.city = req.body.city;
   newUser.zipCode = req.body.zipCode;
   newUser.email = req.body.email;
   newUser.gender = req.body.gender;
   newUser.userType = req.body.userType;
   newUser.save(function(err, data){
       if(err){
           console.log(err);
           res.send(err);
       }
       else{
           res.send("Data inserted");
       }
   });
}

const userUpdate = async (req, res) => {
    const user = users.findByIdAndUpdate(req.params.id, 
        {
            firstName: req.body.firstName,
            dob: req.body.dob,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            state: req.body.state,
            city: req.body.city,
            zipCode: req.body.zipCode,
            email: req.body.email,
            gender: req.body.gender,
            userType: req.body.userType
        }, function(err, data) {
            if(err){
                console.log(err);
                res.send(err);
            }
            else{
                console.log("Data updated!");
                res.send("User updated!");
            }
        });  
}

const userDelete = async (req, res) => {
    const user = users.findByIdAndDelete(req.params.id, 
        function(err, data) {
            if(err){
                console.log(err);
                res.send(err);
            }
            else{
                console.log("Data Deleted!");
                res.send("Data Deleted!");
            }
        });   
}

module.exports = {
    userRetrieve,
    userCreate,
    userUpdate,
    userDelete
}