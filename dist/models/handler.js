'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HandlerSchema = Schema({
    name: String,
    event: {
        type: String,
        enum: ['click', 'doubleclick', 'keypress', 'mousemove', 'mousewheel']
    },
    function: { type: Schema.Types.ObjectId, ref: 'Function' }
});

module.exports = {
    model: mongoose.model('Handler', HandlerSchema),
    schema: HandlerSchema
};
//# sourceMappingURL=handler.js.map