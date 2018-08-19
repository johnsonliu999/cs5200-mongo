const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ViewSchema = Schema({
    name: String,
    widgets: [{ type: Schema.Types.ObjectId, ref: 'Widget' }],
});

module.exports = {
    model: mongoose.model('View', ViewSchema),
    schema: ViewSchema
};