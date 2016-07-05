var AWS = require("aws-sdk");
var INDEX_TEMPLATE = "sent.ejs";

AWS.config.loadFromPath('./config.json');

var sqs = new AWS.SQS();

var params = {
	MessageBody: 'STRING_VALUE',
	QueueUrl: 'https://sqs.us-west-2.amazonaws.com/983680736795/StepniewskiSQS'
};

exports.action = function (request, callback) {
	
	var content = [];
	var files = JSON.parse(request.body.files);
	var angle = parseInt(request.body.angle);
	
	content.push({ files: files, angle: angle });
	console.log(JSON.stringify(content));
	params.MessageBody = JSON.stringify(content);
	
	sqs.sendMessage(params, function (err, data) {
		if (err) {
			console.log(err, err.stack);
		} 
		else {
			callback(null, { template: INDEX_TEMPLATE });
			console.log(data);
		}
	});

}
