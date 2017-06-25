const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`app started on port: ${port}`);
});

module.exports = app;
