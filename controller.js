'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = (req, res) => {
    response.ok('Application is running', res);
}

// Menampilkan Semua Data Yang Ada di tabel (Keranjang) pada Database 

exports.showKeranjangtable = (req, res) => {
    connection.query('SELECT * FROM keranjang', (err, rows, fileds) => {
        if (err) {
            connection.log(err)
        } else {
            response.ok(rows, res)
        }
    })
}

