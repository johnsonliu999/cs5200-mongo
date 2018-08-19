'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ViewSchema = Schema({
    name: String,
    widgets: [{ type: Schema.Types.ObjectId, ref: 'Widget' }]
});

module.exports = {
    model: mongoose.model('View', ViewSchema),
    schema: ViewSchema
};
//# sourceMappingURL=view.js.map