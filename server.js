
const express = require('express');
const path = require('path');

const app = express();

//app.set('port', '3000');
app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', function (request, response){
app.get('*', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 5000);

module.exports = app;