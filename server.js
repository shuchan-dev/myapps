
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parser aplikasi/json file
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// call routes
var routes = require('./routes');
routes(app);


// running server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
