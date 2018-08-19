'use strict';

var _developer = require('../models/developer');

var _developer2 = _interopRequireDefault(_developer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function (req, res) {
    var develper = new _developer2.default();
    developer.username = req.body.name;
    develper.save(function (err) {
        if (err) res.send(err);
        res.json({ message: 'Developer created' });
    });
});

module.exports = router;
//# sourceMappingURL=developer.js.map