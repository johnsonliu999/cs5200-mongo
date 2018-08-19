'use strict';

module.exports = function (app) {
  require('../models/database');
  var developerModel = require('../models/developer');
  app.get('/api/developer', findAllDevelopers);
  function findAllDevelopers(req, res) {
    developerModel.findAllDevelopers().then(function (developers) {
      return res.send(developers);
    });
  }
};
//# sourceMappingURL=developer.service.js.map