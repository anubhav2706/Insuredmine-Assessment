const csvtojson = require("csvtojson");
const AgentModel = require("../model/agent");
const UserModel = require("../model/users");
const UsersAccountModel = require("../model/usersAccount")
const LOBModel = require("../model/lob");
const CarrierModel = require("../model/carrier");
const PolicyModel = require("../model/policy");

const fileName = "data-sheet.csv";
var agentArrayToInsert = [];
var userArrayToInsert = [];
var usersAccountArrayToInsert = [];
var LOBArrayToInsert = [];
var carrierArrayToInsert = [];
var policyArrayToInsert = [];

const uploadFile = async (req, res) => {
    csvtojson().fromFile(fileName).then(source => {
        console.log("source :", source.length);
        for (var i = 0; i < source.length; i++) {
            var agentObj = {
                agentName: source[i]["agent"]
            };
            agentArrayToInsert.push(agentObj);
            var userObj = {
                firstName: source[i]["firstname"],
                dob: source[i]["dob"],
                address: source[i]["address"],
                phoneNumber: source[i]["phone"],
                state: source[i]["state"],
                city:source[i]["city"],
                zipCode: source[i]["zip"],
                email: source[i]["email"],
                gender: source[i]["gender"],
                userType: source[i]["userType"]
            };
            userArrayToInsert.push(userObj);
            var usersAccountObj = {
                account_name: source[i]["account_name"],
                account_type: source[i]["account_type"],
            };
            usersAccountArrayToInsert.push(usersAccountObj);
            var LOBObj = {
                category_name: source[i]["category_name"]
            };
            LOBArrayToInsert.push(LOBObj);
            var carrierObj = {
                company_name: source[i]["company_name"],
                csr: source[i]["csr"]
            };
            carrierArrayToInsert.push(carrierObj);
            var policyObj = {
                policy_number: source[i]["policy_number"],
                policy_start_date: source[i]["policy_start_date"],
                policy_end_date: source[i]["policy_end_date"],
                policy_mode: source[i]["policy_mode"],
                policy_type: source[i]["policy_type"],
                producer: source[i]["producer"],
                premium_amount: source[i]["premium_amount"],
                policy_category: "",
                company_collection_id: "",
                user_id: ""
            };
            policyArrayToInsert.push(policyObj);
        }
        Promise.all([
            AgentModel.insertMany(agentArrayToInsert),
            UserModel.insertMany(userArrayToInsert),
            UsersAccountModel.insertMany(usersAccountArrayToInsert),
            LOBModel.insertMany(LOBArrayToInsert),
            CarrierModel.insertMany(carrierArrayToInsert),
        ]).then(results => {
            const [agents, users, usersAccount, LOB, carrier] = results;
            let count = 0
            policyArrayToInsert.map(policy => {
                policy.user_id = users[count].id
                policy.policy_category = LOB[count].id
                policy.company_collection_id = carrier[count].id
                count++
            })
            PolicyModel.insertMany(policyArrayToInsert).then(policy => {
                let data = {
                    agent: agents,
                    users: users,
                    usersAccount: usersAccount,
                    LOB: LOB,
                    carrier: carrier,
                    policy: policy
                }
                res.status(200).send({ success: true, message: "File uploaded and records inserted successfully", data: data })
            }).catch(err => {
                res.status(400).send({ success: false, message: "Error while uploading file/inseting records", data: err })
            })
        }).catch(err => {
            res.status(400).send({ success: false, message: "Something went wrong", data: err })
        })
    });
}

module.exports = {
    uploadFile
}



