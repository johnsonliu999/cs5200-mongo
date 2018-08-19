'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var VariableSchema = require('./variable').schema;

var ControllerSchema = Schema({
    name: String,
    handler: [{ type: Schema.Types.ObjectId, ref: 'Handler' }],
    variables: [VariableSchema],
    services: [{ type: Schema.Types.ObjectId, ref: 'Service' }]
});

module.exports = {
    model: mongoose.model('Controller', ControllerSchema),
    schema: ControllerSchema
};
//# sourceMappingURL=controller.js.map