var mysql = require('mysql');

// Buat koneksi ke database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbpus'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Successful connected to mysql');
})

module.exports = conn;