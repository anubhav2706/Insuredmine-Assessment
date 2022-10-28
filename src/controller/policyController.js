const policy = require("../model/policy");

const policyRetrieve = async (req, res) => {
    const policyC = policy.find(function(err, data) {
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log(data);
            res.send(data);
        }
    });  
}

const policyCreate = async (req, res) => {
   var newpolicy = new policy();
   newpolicy.policy_number = req.body.policyNumber;
   newpolicy.policy_start_date = req.body.policyStartDate;
   newpolicy.phoneNumber = req.body.phoneNumber;
   newpolicy.policy_end_date = req.body.policyEndDate;
   newpolicy.policy_mode = req.body.policyMode;
   newpolicy.policy_type = req.body.policyType;
   newpolicy.producer = req.body.producer;
   newpolicy.premium_amount = req.body.premiumAmount;
   newpolicy.save(function(err, data){
       if(err){
           console.log(err);
       }
       else{
           res.send("Data inserted");
       }
   });
}

const policyUpdate = async (req, res) => {
    const policyC = policy.findByIdAndUpdate(req.params.id, 
        {
            policy_number: req.body.policyNumber,
            policy_start_date: req.body.policyStartDate,
            phoneNumber: req.body.phoneNumber,
            policy_end_date: req.body.policyEndDate,
            policy_mode: req.body.policyMode,
            policy_type: req.body.policyType,
            producer: req.body.producer,
            premium_amount: req.body.premiumAmount
        }, function(err, data) {
            if(err){
                console.log(err);
                res.send(err);
            }
            else{
                console.log("Data updated!");
                res.send("Policy updated!");
            }
        });  
}

const policyDelete = async (req, res) => {
   const policyC =  policy.findByIdAndDelete(req.params.id, 
        function(err, data) {
            if(err){
                console.log(err);
                res.send(err);
            }
            else{
                console.log("Data Deleted!");
                res.send("Policy Deleted!");
            }
        });   
}

module.exports = {
    policyRetrieve,
    policyCreate,
    policyUpdate,
    policyDelete
}