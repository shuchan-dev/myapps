'use strict';

module.exports = (app) => {
    var myjson = require('./controller');

    app.route('/')
        .get(myjson.index);
}