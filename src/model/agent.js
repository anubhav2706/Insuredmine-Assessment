const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgentSchema = new Schema({
    agentName: {
        type: String,
    }
});

module.exports = agents = mongoose.model('agents', AgentSchema);