var app = require('../app');
const PORT = process.env.SSL_PORT || 3000;
app.listen(PORT, function() {
    console.log('server running in '+PORT);
});