import express from 'express'

var Schema = require('mongoose');
var bodyParser = require('body-parser');
// var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(bodyParser.json());

module.exports = app;
mongoose.set('useCreateIndex', true)
mongoose.connect("mongodb://localhost/record", { useNewUrlParser: true });

// Define Model
import { Records, HashTags, Members } from './models/RecordSchema';

var SchemaController = require('./models/SchemaController');
app.use('/record', SchemaController);

require('./routes/record/dayRecord')(app, Records);
//app.use('/getDayRecord', dayRecord);
/*
app.get('/getDayRecord/:id/:time', async(req, res) => {
  console.log("connect");
  var result = await records.findOne({ id: req.params.id, time: req.params.time });
  //if(result) res.status(200).json(result);
  //else res.status(400).json({message: 'No Record'});
  //else res.send('No Record');
  console.log(req.params.id);
  res.send(result);
 });
*/
module.exports = app;