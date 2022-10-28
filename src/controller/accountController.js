const usersAccount = require("../model/usersAccount")

const accountRetrieve = async (req, res) => {
   const account = usersAccount.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
}

const accountCreate = async (req, res) => {
    var newAccount = new usersAccount();
   newAccount.account_name = req.body.accountName;
   newAccount.account_type = req.body.accountType;
   newAccount.save(function(err, data){
       if(err){
           console.log(error);
       }
       else{
           res.send("Data inserted");
       }
   });
}

const accountUpdate = async (req, res) => {
     const account =  usersAccount.findByIdAndUpdate(req.params.id, 
        {
            account_name:req.body.accountName,
            account_type:req.body.accountType
        }, function(err, data) {
            if(err){
                console.log(err);
                res.send(err);
            }
            else{
                console.log("Data updated!");
                res.send("Account updated");
            }
        });  
}

const accountDelete = async (req, res) => {
   const account =  usersAccount.findByIdAndDelete(req.params.id, 
        function(err, data) {
            if(err){
                console.log(err);
                res.send(err);
            }
            else{
                console.log("Data Deleted!");
                res.send("Account Deleted!");
            }
        });   
}

module.exports = {
    accountRetrieve,
    accountCreate,
    accountUpdate,
    accountDelete
}