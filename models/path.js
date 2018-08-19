const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ParameterSchema = require('./parameter').schema;

const PathSchema = Schema({
    name: String,
    path: String,
    pathParameters: [ParameterSchema]
});

module.exports = {
    model: mongoose.model('Path', PathSchema),
    schema: PathSchema
};