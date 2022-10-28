const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    firstName: {
        type: String
    },
    dob: {
        type: Date
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    zipCode: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    userType: {
        type: String
    }
});

module.exports = users = mongoose.model('users', UsersSchema);