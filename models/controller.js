const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VariableSchema = require('./variable').schema;

const ControllerSchema = Schema({
    name: String,
    handler: [{ type: Schema.Types.ObjectId, ref: 'Handler' }],
    variables: [VariableSchema],
    services: [{ type: Schema.Types.ObjectId, ref: 'Service'}]
});

module.exports = {
    model: mongoose.model('Controller', ControllerSchema),
    schema: ControllerSchema
};