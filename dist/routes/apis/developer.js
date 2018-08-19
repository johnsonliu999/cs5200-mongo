'use strict';

var Developer = require('../../models/developer').model;
var Application = require('../../models/application').model;

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    Developer.find(function (err, developers) {
        if (err) res.send(err);else res.json(developers);
    });
});

router.get('/:did', function (req, res) {
    Developer.findById(req.params.did, function (err, developer) {
        if (err) res.send(err);else res.json(developer);
    });
});

router.get('/:did/application', function (req, res) {
    Developer.findById(req.params.did).populate('applications').exec().then(function (developer) {
        return res.json(developer.applications);
    }).catch(function (err) {
        return res.status(503).send(err);
    });
});

router.post('/', function (req, res) {
    var d = new Developer({ username: req.body.username });
    d.save(function (err, developer) {
        if (err) res.send(err);else res.json(developer);
    });
});

router.post('/:did/application', function (req, res) {
    var application = new Application({ name: req.body.name });
    application.save().then(function (a) {
        return Developer.findByIdAndUpdate(req.params.did, { '$push': { applications: a.id } }, { 'new': true }).exec().then(function () {
            return res.json(a);
        });
    }).catch(function (err) {
        return res.status(503).send(err);
    });
});

router.put('/:did', function (req, res) {
    Developer.findByIdAndUpdate(req.params.did, function (err, developer) {
        if (err) res.send(err);else {
            developer.username = req.body.username;
            developer.save(function (err, d) {
                if (err) res.send(err);else res.json(d);
            });
        }
    });
});

router.delete('/:did', function (req, res) {
    Developer.remove({ _id: req.params.did }, function (err, developer) {
        if (err) res.send(err);else res.status(204).send();
    });
});

module.exports = router;
//# sourceMappingURL=developer.js.map