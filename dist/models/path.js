'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ParameterSchema = require('./parameter').schema;

var PathSchema = Schema({
    name: String,
    path: String,
    pathParameters: [ParameterSchema]
});

module.exports = {
    model: mongoose.model('Path', PathSchema),
    schema: PathSchema
};
//# sourceMappingURL=path.js.map