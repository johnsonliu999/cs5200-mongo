const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RoutingSchema = require('./routing').schema;
const Component = require('./component').model;

const ApplicationSchema = mongoose.Schema({
    name: String,
    components: [{ type: Schema.Types.ObjectId, ref: 'Component' }],
    services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
    routings: [RoutingSchema]
});

module.exports = {
    model: mongoose.model('Application', ApplicationSchema),
    schema: ApplicationSchema
};