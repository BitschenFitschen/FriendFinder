var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var PORT = 8080;

console.log('working')

app.use(bp.json());


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "friendfinder.html"));
});







app.listen(PORT, function() {
	console.log('listening on port ' + PORT);
});