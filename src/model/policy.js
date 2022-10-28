const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PloicySchema = new Schema({
    policy_number: {
        type: String
    },
    policy_start_date: {
        type: Date
    },
    policy_end_date: {
        type: Date
    },
    policy_mode: {
        type: String
    },
    policy_type: {
        type: String
    },
    producer: {
        type: String
    },
    premium_amount: {
        type: String
    },
    policy_category: {
        default: null,
        type: Schema.Types.ObjectId,
        ref: 'lobs'
    },
    company_collection_id: {
        default: null,
        type: Schema.Types.ObjectId,
        ref: 'carriers'
    },
    user_id: {
        default: null,
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = policy = mongoose.model('policy', PloicySchema);