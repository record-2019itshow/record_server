import express from 'express'
import path from 'path'
const session = require('express-session');

var Schema = require('mongoose');
var bodyParser = require('body-parser');
// var express = require('express');
var app = express();
var mongoose = require('mongoose');
var multer  = require('multer');

app.use(session({
  secret: '@#@$MYSIGN#@$#$', // 우선 임의로 키 설정
  resave: false,
  saveUninitialized: true
 }));

 app.use(express.static(path.join(__dirname, 'public')));

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
import { Records, Members } from './models/RecordSchema';

// var Member = RecordModel.Member;
// var HashTag = RecordModel.HashTag;
// var Record = RecordModel.Record;

var SchemaController = require('./models/SchemaController');
app.use('/record', SchemaController);


require('./routes/record')(app, Records, Members);
require('./routes/users')(app, Members);
require('./routes/addRecord')(app ,Records, Members);

module.exports = app;