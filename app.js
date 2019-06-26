import express from 'express'
import path from 'path'
const session = require('express-session');

var Schema = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var multer  = require('multer');

app.use(session({
  secret: '@#@$MYSIGN#@$#$', // 우선 임의로 키 설정
  resave: false,
  saveUninitialized: true
 }));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb+srv://dbfk028:rthmwl4892@cluster0-kccti.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization");
  next();
});

// Define Model
import { Records, Members } from './models/RecordSchema';

var SchemaController = require('./models/SchemaController');
app.use('/record', SchemaController);

require('./routes/record')(app, Records, Members);
require('./routes/users')(app, Members);
require('./routes/addRecord')(app ,Records, Members);

module.exports = app;
