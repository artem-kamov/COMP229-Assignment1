var express = require('express'); 
var app = express(); 
app.use('/', function(req, res) { 
	res.send('Welcome to Artem Kamov\'s Website'); 
}); 
app.listen(3000); 
console.log('Server running at http://localhost:3000/'); 
module.exports = app; 
