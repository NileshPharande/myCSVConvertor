//npm modules required.
var express = require("express");
var request = require('request');
var csvToJson = require("csvtojson");

var app = express();
var port = process.env.PORT || 3000;

app.get("/convert/csv/to/json", function(req, res) {

	// Log for getting start tme of the request execution.
	console.log("start_time: ", new Date());
	
	// if request not containing link for file in it return error message
	var queryString = req.query.q;
	if(!queryString) {
		console.log("not received any file name in request.");
		res.status(400).send("Please mention file name in URL");
	}

	// Make request for file from received url.
	request(queryString, function requetHandler(error, response, body) {
		
		console.log("data_received_time:- ", new Date());
		console.log("status_code:- ", response.statusCode);
		console.log("content-type:- ", response.headers['content-type'])
		
		//check for received data from url or not.
		if (!error && response.statusCode == 200) {
			//Check for the recevived file is csv or not.
			if((response.headers['content-type'] == "application/octet-stream") || (response.headers['content-type'] == "application/csv") || (response.headers['content-type'] == "text/csv")) {
				//Perform csv to json conversion.
				csvToJson()
				.fromString(body)
		        .on('json', function jsonForSingleRecord(json) {
				    res.write(JSON.stringify(json));
			    }).on('done', function conversionComplete() {
				    console.log("end_time: ", new Date());
			        res.status(200).end();
			    });
			} else {
				//Return error as file is not csv file.
				console.log("Received file is not a .csv");
				res.status(400).send("Received file from url is not csv");
			}
		} else {
			//If failed to read file contents from the path
			console.log("file not found at path:- ", queryString);
			console.log("file not found Error:- ", error);
			res.status(response.statusCode).send("FILE ACCESS FAILURE.");
		}
	});
});
// API fpr root request.
app.get("/", function(req, res) {
	res.end("Hello from Rooot.");
});

// server start listening on available port.
app.listen(port, function listener(err) {
	if(err) console.log("err: ", err);
	console.log("Server is listening on port: ", port);
});