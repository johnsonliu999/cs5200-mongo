const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeveloperSchema = Schema({
    username: String,
    applications: [{ type: Schema.Types.ObjectId, ref: 'Application'}]
});

module.exports = {
    model: mongoose.model('Developer', DeveloperSchema),
    schema: DeveloperSchema
};