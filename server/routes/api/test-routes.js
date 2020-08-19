'use strict';
var routes = require('express').Router();
var configuration = require(__base + 'server/configuration');
var logger = configuration.logger;

function test(request, response) {
    logger.debug('GET: /token', request.path);
    response.setHeader('Content-Type', 'application/json');
    return response.status(200).json({"test": "working"});
}

routes.get('/', test);

module.exports = routes;