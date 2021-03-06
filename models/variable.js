const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VariableSchema = Schema({
    name: String,
    variableType: {
        type: String,
        enum: ['String', 'Number', 'Date']
    }
});

module.exports = {
    model: mongoose.model('Variable', VariableSchema),
    schema: VariableSchema
};