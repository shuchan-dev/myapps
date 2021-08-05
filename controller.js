"use strict";

var response = require("./res");
var connection = require("./connection");

exports.index = (req, res) => {
  response.ok("Application is running", res);
};

// Menampilkan Semua Data Yang Ada di tabel (Keranjang) pada Database

exports.showKeranjangtable = (req, res) => {
  connection.query("SELECT * FROM keranjang", (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menambahkan data
exports.tambahData = (req, res) => {
  var keyy = req.body.keyy;
  var valuee = req.body.valuee;
  var brand = req.body.brand;
  var productName = req.body.productName;

  connection.query(
    "INSERT INTO `keranjang` (keyy,valuee,brand,productName) VALUES(?,?,?,?)",
    [keyy, valuee, brand, productName],
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        response.ok("successfully added ", res);
      }
    }
  );
};
