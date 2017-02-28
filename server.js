// http://localhost:3000/convert/csv/to/json?q=https://s3.amazonaws.com/ed-college-choice-public/Most+Recent+Cohorts+(Scorecard+Elements).csv
// https://www.npmjs.com/package/csvtojson
// https://www.npmjs.com/package/request
// http://expressjs.com/en/guide/routing.html
// https://www.tutorialspoint.com/nodejs/nodejs_streams.htm
// http://codewinds.com/blog/2013-08-02-streams-basics.html
// how to run nodejs app on heroku  --->  https://devcenter.heroku.com/articles/deploying-nodejs


var express = require("express");
var request = require('request');
var csvToJson = require("csvtojson");
//var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;
try {
	app.get("/convert/csv/to/json", function(req, res) {
		console.log("STRT_TIME: ", new Date());
		if(!req.query.q) {
			console.log("not received any file name in request.");
			res.end("ERROR: not received any file name.");
		}
		request(req.query.q, function (error, response, body) {
			console.log("RCVD_MSGE: ", new Date());
			if (!error && response.statusCode == 200) {
				csvToJson()
				.fromString(body)
		        .on('json',function(json) {
				    res.write(JSON.stringify(json));
				    //console.log("SEND_MSGE: ", new Date());
			    }).on('done',function() {
				    console.log("END__MSGE: ", new Date());
			        res.end();
			    });
			}
		});
	});
	app.get("/", function(req, res) {
		res.end("Hello from Rooot.");
	});

	app.listen(port, function listener(err) {
		if(err) console.log("err: ", err);
		console.log("Server is listening on port: ", port);
	});
} catch(error) {
	//Code terminated abnormally.
	console.log("Program terminated.");
}