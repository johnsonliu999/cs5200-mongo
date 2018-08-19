const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ParameterSchema = require('./parameter').schema;

const FunctionSchema = Schema({
    name: String,
    parameters: [ParameterSchema]
});

module.exports = {
    model: mongoose.model('Function', FunctionSchema),
    schema: FunctionSchema
};