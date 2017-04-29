var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "survey.html"));
});

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

// require('/app/routing/api-routes')(app);
// require('/app/routing/html-routes')(app);


app.listen(PORT, function() {
	console.log('listening on port ' + PORT);
});


