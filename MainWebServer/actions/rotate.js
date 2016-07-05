var AWS = require("aws-sdk");
var INDEX_TEMPLATE = "rotate.ejs";

AWS.config.loadFromPath('./config.json');

var sqs = new AWS.SQS();


exports.action = function (request, callback) {
	
	var files = JSON.parse(request.body.files);
	
	
	callback(null, files, null);
}