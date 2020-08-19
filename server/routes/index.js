/**
 * Routes entry point
 * @module routes/index.js
 */
'use strict';
var express = require('express');
var router = express.Router();

var apiRoutesInitializer = require('./api');
apiRoutesInitializer(router, '/api');

// Allows html5 routing, to avoid use of # in the path
router.get('*', function(req, res, next) {
    res.sendFile('index.html', { root: __base + '/dist/' });
});

module.exports = router;
