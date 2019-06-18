module.exports = (app, Records) => {
 app.get('/getDayRecord/:id/:time', async (req, res) => {
  var result = await Records.find({ id: req.params.id, time: req.params.time });
  if(result) res.status(200).json(result);
  else res.status(400).json('Not Found Record');
 })
 .get('/getHashRecord/:id/:record_key/:hashtags', async (req, res) => {
  await Records.find({ id: req.params.id, record_key: req.params.record_key }, async (err, subRes)=> {
   if(err) res.status(400).json({ error });
   else if(!subRes) res.status(400).json('Not Found Record');
   var result = await Records.findOne({ record_key: req.params.record_key, hashtags: req.params.hashtags });
   if(result) res.status(200).json(result);
   else res.status(400).json('Not Found Record');
  })
 })
 .get('/getAllRecord/:id', async (req, res) => {
  var result = await Records.find({ id: req.params.id });
  if(result) res.status(200).json(result);
  else res.status(400).json('Not Found Record');
 });
}