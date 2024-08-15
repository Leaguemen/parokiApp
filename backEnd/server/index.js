const express = require("express");
const cors = require('cors');
const mysql = require("mysql");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'apinode.theodorusmisapaus.online',
  user: 'theodoru_leaguemen',
  password: ';sk(KaCo+j$O',
  database: 'theodoru_parokiapp'
});

connection.connect(function(err){
  if(err){
    console.log("error on database connection")
    console.log(err.code);
  }
})


const SECRET_KEY = '075c4f0a1a2a'
const users = [
  { id: 1, username: 'paroki', password: 'misapaus' }
];
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const jwtToken = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY);
    res.json({ message:"User authentication success",token: jwtToken });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});


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
  connection.query("SELECT pengumuman.post_id,umat.username,pengumuman.title,pengumuman.isi,pengumuman.tanggal FROM pengumuman INNER JOIN umat ON pengumuman.pembuat_id = umat.nomor WHERE tipe = 'postingan';", (err, results) => {
    if (err) {
      console.error("An error occurred while performing the query.");
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

app.get("/forms", (req, res) => {
  connection.query("SELECT pengumuman.post_id,umat.username,pengumuman.title,pengumuman.isi,pengumuman.tanggal FROM pengumuman INNER JOIN umat ON pengumuman.pembuat_id = umat.nomor WHERE tipe = 'form';", (err, results) => {
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