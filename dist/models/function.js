'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ParameterSchema = require('./parameter').schema;

var FunctionSchema = Schema({
    name: String,
    parameters: [ParameterSchema]
});

module.exports = {
    model: mongoose.model('Function', FunctionSchema),
    schema: FunctionSchema
};
//# sourceMappingURL=function.js.map