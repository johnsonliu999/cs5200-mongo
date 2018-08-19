'use strict';

var mongoose = require('mongoose');

var ApplicationSchema = mongoose.Schema({
    name: String

});

module.exports = mongoose.model('Application', ApplicationSchema);
//# sourceMappingURL=application.js.map