var app = require('../app');

const PORT = process.env.PORT || 9000;
app.listen(PORT, function() {
    console.log('server running in '+PORT);
});

/*
var fs = require('fs');
var https = require('https');

const options = {
  key: fs.readFileSync('./keys/key.pem'),
  cert: fs.readFileSync('./keys/key-cert.pem')
};
 
https.createServer(options, app).listen(3000);
*/