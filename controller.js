'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = (req, res) => {
    response.ok('Application is running', res);
}