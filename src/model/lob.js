const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lobSchema = new Schema({
    category_name: {
        type: String,
    }
});

module.exports = lobs = mongoose.model('lobs', lobSchema);