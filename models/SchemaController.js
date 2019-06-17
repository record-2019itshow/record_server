var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended:true }));

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/record"; // record is the name of db 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

module.exports = router;