'use strict';

module.exports = (app) => {
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);

    // menampilkan semua data pada tabel
    app.route('/show')
        .get(myjson.showKeranjangtable)
}