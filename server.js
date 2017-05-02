// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/html-routes');
var apiRoutes = require('./app/routing/api-routes');

console.log(apiRoutes)

// Express set up
var app = express();
var PORT = process.env.PORT || 3000;

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Static components
app.use('/', express.static(__dirname + '/app/public'));
// app.use('/bower_components', express.static(__dirname + '/bower_components'));

// Routes
app.use('/', apiRoutes);
app.use('/', htmlRoutes);

// app.get('/', function(req, res){
// 	res.sendFile(path.join(__dirname, '/survey.html'));
// })

// app.post('/api/friends', function(req, res) {
// 	console.log(req.body)
// })

// Start listening on port
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
})