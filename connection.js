var mysql = require("mysql");

// Buat koneksi ke database
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbpus",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Successful connected to mysql");
});

module.exports = conn;
