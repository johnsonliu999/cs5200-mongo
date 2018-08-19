'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WidgetSchema = Schema({
    name: String,
    type: String,
    width: Number,
    height: Number,
    size: Number,
    src: String,
    style: String,
    class: String
});

module.exports = {
    model: mongoose.model('Widget', WidgetSchema),
    schema: WidgetSchema
};
//# sourceMappingURL=widget.js.map