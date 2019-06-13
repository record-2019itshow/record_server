var express = require('express');
var app = express();
var mongoose = require('mongoose');

// DB Connect
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log("Connected to mongodb server");
});

module.exports = app;
mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb://localhost/record", { useNewUrlParser: true });

// Define Model
var RecordModel = require('./models/RecordSchema');

var SchemaController = require('./models/SchemaController');
app.use('/record', SchemaController);

module.exports = app;