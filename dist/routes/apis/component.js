'use strict';

var Component = require('../../models/component').model;
var View = require('../../models/view').model;

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    Component.find(function (err, components) {
        if (err) res.send(err);else res.json(components);
    });
});

router.get('/:cid', function (req, res) {
    Component.findById(req.params.cid).populate({
        path: 'view',
        populate: { path: 'widgets' }
    }).populate('controller').then(function (c) {
        return res.json(c);
    }).catch(function (err) {
        return res.status(503).send(err);
    });
});

router.put('/:cid', function (req, res) {
    Component.findByIdAndUpdate(req.params.cid, { name: req.body.name }, { 'new': true }).exec().then(function (a) {
        return res.json(a);
    }).catch(function (err) {
        return res.status(503).send(err);
    });
});

router.delete('/:cid', function (req, res) {
    Component.findByIdAndRemove(req.params.cid).exec().then(function () {
        return res.status(204).send();
    }).catch(function (err) {
        return res.status(503).send(err);
    });
});

// for view
router.get('/:cid/view', function (req, res) {
    Component.findById(req.params.cid).populate({
        path: 'view',
        populate: { path: 'widgets'
        } }).exec().then(function (c) {
        return res.json(c.view);
    }).catch(function (err) {
        return res.status(503).send(err);
    });
}).post('/:cid/view', function (req, res) {
    var view = new View(req.body);
    view.save().then(function (v) {
        return Component.findByIdAndUpdate(req.params.cid, { '$set': { view: v.id } }, { 'new': true }).exec().then(function () {
            return res.json(v);
        });
    }).catch(function (err) {
        return res.status(503).send(err);
    });
});

module.exports = router;
//# sourceMappingURL=component.js.map