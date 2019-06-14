module.exports = (app, Records) => {
 console.log("sibal");
 app.get('/dayRecord', async (req, res) => {
  console.log("Inhyum");
  //var result = await Records.findOne({ id: req.params.id, time: req.params.time });
  //if(result) res.status(200).json(result);
  //else res.status(400).json({message: 'No Record'});
  //else res.send('No Record');
  //console.log(req.params.id);
  //res.send(result);
 });
};