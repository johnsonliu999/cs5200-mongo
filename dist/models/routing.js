'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PathSchema = require('./path').schema;

var RoutingSchema = Schema({
    name: String,
    path: PathSchema,
    component: { type: Schema.Types.ObjectId, ref: 'Component' }
});

module.exports = {
    model: mongoose.model('Routing', RoutingSchema),
    schema: RoutingSchema
};
//# sourceMappingURL=routing.js.map