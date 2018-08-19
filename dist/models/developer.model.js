'use strict';

var mongoose = require('mongoose');

var DeveloperSchema = mongoose.Schema({
    username: String
});

module.exports = mongoose.model('Developer', DeveloperSchema);
//# sourceMappingURL=developer.js.map