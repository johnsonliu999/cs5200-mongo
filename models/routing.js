const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PathSchema = require('./path').schema;

const RoutingSchema = Schema({
    name: String,
    path: PathSchema,
    component: { type: Schema.Types.ObjectId, ref: 'Component'}
});

module.exports = {
    model: mongoose.model('Routing', RoutingSchema),
    schema: RoutingSchema
};