'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeveloperSchema = Schema({
    username: String,
    applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }]
});

module.exports = {
    model: mongoose.model('Developer', DeveloperSchema),
    schema: DeveloperSchema
};
//# sourceMappingURL=developer.js.map