module.exports = (app, Records) => {
 app.get('/getDayRecord/:record_key', async (req, res) => {
  var result = await Records.findOne({ record_key: req.params.record_key });
  if(result) {
   res.status(200).json(result.id + "님의 한줄 일기: " + result.content);
   //res.status(200).json(result.content);
  } else {
   res.status(400).json('No Record');
  }
 });
};