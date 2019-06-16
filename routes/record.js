module.exports = (app, Records) => {
 app.get('/getDayRecord/:time', async (req, res) => {
  var result = await Records.findOne({ time: req.params.time });
  if(result) {
   res.status(200).json(result);
  } else {
   res.status(400).json('No Record');
  }
 })
};