const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParameterSchema = Schema({
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