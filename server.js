//npm modules required.
var express = require("express");
var request = require('request');
var csvToJson = require("csvtojson");
var winston = require("winston");

var app = express();
var port = process.env.PORT || 3000;

app.get("/convert/csv/to/json", function(req, res) {

	// Log for getting start tme of the request execution.
	winston.info("start_time: ", new Date());

	try {

		// if request not containing link for file in it return error message
		var queryString = req.query.q;
		if(!queryString) {
			winston.error("Query not recived");
			res.status(400).json({"message":"Kindly send file URL and try again"});
		}

    	// Make request for file from received url.
		request(queryString, function requetHandler(error, response, body) {
		
			winston.info("data_received_time:- ", new Date());

			//check for received data from url or not.
			if (!error && response.statusCode == 200) {
				//Check for the recevived file is csv or not.
				var contentType = response.headers['content-type'];
				if((contentType == "application/octet-stream") || (contentType == "application/csv") || (contentType == "text/csv")) {
					//Perform csv to json conversion.
					csvToJson()
					.fromString(body)
			        .on('json', function jsonForSingleRecord(json) {
					    res.write(JSON.stringify(json));
				    }).on('done', function conversionComplete() {
					    winston.info("end_time: ", new Date());
				        res.status(200).end();
				    });
				} else {
					//Return error as file is not csv file.
					winston.error("Received file is not a .csv");
					winston.info("content-type:- ", contentType);
					res.status(400).json({"message":"Received file from url is not csv"});
				}
			} else {
				//If failed to read file contents from the path
				winston.error("file not found at path:- ", queryString);
				winston.error("file not found Error:- ", error);
				res.status(404).json({"message":"FILE ACCESS FAILURE"});
			}
		});
    } catch (error) {
		winston.error(error);
		res.status(404).json({"message":"Kindly send file URL and try again"});
	}
});
// API fpr root request.
app.get("/", function(req, res) {
	res.status(200).json({"message":"Application is working, all set to use"});
});

// server start listening on available port.
app.listen(port, function listener(err) {
	if(err) winston.info("err: ", err);
	winston.info("Server is listening on port: ", port);
});
