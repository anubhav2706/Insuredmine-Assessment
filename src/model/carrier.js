const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarrierSchema = new Schema({
    company_name: {
        type: String,
    },
    csr: {
        type: String
    }
});

module.exports = carriers = mongoose.model('carriers', CarrierSchema);