'use strict';

var mongoose = require('mongoose');

var DeveloperSchema = mongoose.Schema({
    username: String
});

module.exports = {
    model: mongoose.model('Developer', DeveloperSchema),
    schema: DeveloperSchema
};
//# sourceMappingURL=developer.js.map