'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VariableSchema = Schema({
    name: String,
    variableType: {
        type: String,
        enum: ['String', 'Number', 'Date']
    }
});

module.exports = {
    model: mongoose.model('Variable', VariableSchema),
    schema: VariableSchema
};
//# sourceMappingURL=variable.js.map