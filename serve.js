var express = require('express');
var http = require('http');

var app = express();
var router = express.Router();

router.post('/dump', (req, res) => {
	console.log('The server is serving now ...');
	console.log(JSON.stringify(req.body)); 
	res.status(200).send('Thank you for env! I have received them!');
});
app.use('/', router);
var server = http.createServer(app);
server.listen(2504, () => {
	console.log('Server listening on localhost:2504');
});
