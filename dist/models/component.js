'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComponentSchema = Schema({
    name: String,
    controller: { type: Schema.Types.ObjectId, ref: 'Controller' },
    view: { type: Schema.Types.ObjectId, ref: 'View' }
});

module.exports = {
    model: mongoose.model('Component', ComponentSchema),
    schema: ComponentSchema
};
//# sourceMappingURL=component.js.map