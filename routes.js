'use strict'

module.exports = (app) => {
    let myjson = require('./controller')

    app.route('./')
        .get(mysjon.index)
}