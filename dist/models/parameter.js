'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ParameterSchema = Schema({
    name: String,
    parameterType: {
        type: String,
        enum: ['String', 'Number', 'Date']
    }
});

module.exports = {
    model: mongoose.model('Parameter', ParameterSchema),
    schema: ParameterSchema
};
//# sourceMappingURL=parameter.js.map