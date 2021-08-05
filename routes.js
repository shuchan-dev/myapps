"use strict";

module.exports = (app) => {
  var myjson = require("./controller");

  app.route("/").get(myjson.index);

  // menampilkan semua data pada tabel
  app.route("/show").get(myjson.showKeranjangtable);

  // Route untuk menmbahkan data
  app.route("/show").post(myjson.tambahData)
};

