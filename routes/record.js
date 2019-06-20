module.exports = (app, Records) => {
 app.get('/getDayRecord/:id/:time', async (req, res) => {
  var recordTime = new Date(req.params.time);
  var result = await Records.find({ id: req.params.id, time: recordTime });
  if(result) res.status(200).json(result);
  else res.status(400).json('Not Found Record');
 })
 .get('/getHashRecord/:id/:hashtags', async (req, res) => {
  var result = await Records.find({ id: req.params.id, hashtags: '#'+req.params.hashtags });
  if(result) res.status(200).json(result);
  else res.status(400).json('Not Found Record');
 })
 .get('/getAllRecord/:id', async (req, res) => {
  var result = await Records.find({ id: req.params.id });
  if(result) res.status(200).json(result);
  else res.status(400).json('Not Found Record');
 })
 .get('/getSingleRecord/:id/:record_key', async (req, res) => {
  var result = await Records.findOne({ id: req.params.id, record_key: req.params.record_key });
  if(result) res.status(200).json(result);
  else res.status(400).json('Not Found Record');
 });
}