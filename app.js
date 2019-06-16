import express from 'express'
const session = require('express-session');

var Schema = require('mongoose');
var bodyParser = require('body-parser');
// var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(session({
  secret: '@#@$MYSIGN#@$#$', // 우선 임의로 키 설정
  resave: false,
  saveUninitialized: true
 }));

// DB Connect
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log("Connected to mongodb server");
});
app.use(bodyParser.json());


mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb://localhost/record", { useNewUrlParser: true });

// Define Model
import { Records, HashTags, Members } from './models/RecordSchema';

var SchemaController = require('./models/SchemaController');
app.use('/record', SchemaController);

require('./routes/record')(app, Records, HashTags);
require('./routes/users')(app, Members);


module.exports = app;