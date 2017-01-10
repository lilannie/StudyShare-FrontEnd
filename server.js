var express = require('express');
var path = require('path');

// Create our app
var app = express();

app.use(express.static('public'));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
