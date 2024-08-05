const express = require("express");

const mysql = require("mysql");

const PORT = process.env.PORT || 3001;

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: null,
  database: "parokiapp"
});

connection.connect(function(err){
  if(err){
    console.log("error on database connection")
    console.log(err.code);
    console.log(err.code);
  }
})

app.get("/test", (req, res) => {
    res.json({ message: "Connection to server establised." });
  });

app.get("/publicUmat", (req, res) => {
  connection.query("SELECT nomor,nama,lingkungan,grup,bus,tanggalLahir FROM `umat`", (err, results) => {
    if (err) {
      console.error("An error occurred while performing the query.");
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

app.get("/postingan", (req, res) => {
  connection.query("SELECT pengumuman.post_id,umat.username,pengumuman.title,pengumuman.isi,pengumuman.tanggal FROM pengumuman INNER JOIN umat ON pengumuman.pembuat_id = umat.nomor;", (err, results) => {
    if (err) {
      console.error("An error occurred while performing the query.");
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});