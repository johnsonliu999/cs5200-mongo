'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RoutingSchema = require('./routing').schema;
var Component = require('./component').model;

var ApplicationSchema = mongoose.Schema({
    name: String,
    components: [{ type: Schema.Types.ObjectId, ref: 'Component' }],
    services: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
    routings: [RoutingSchema]
});

module.exports = {
    model: mongoose.model('Application', ApplicationSchema),
    schema: ApplicationSchema
};
//# sourceMappingURL=application.js.map