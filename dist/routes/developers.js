'use strict';

var _developer = require('../models/developer');

var _developer2 = _interopRequireDefault(_developer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
//# sourceMappingURL=developer.js.map