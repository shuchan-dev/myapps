'use strict'

const response = require('./res')
const connection = require('./connection')

exports.index = function (req, res) {
    response.ok("Application is running")
}