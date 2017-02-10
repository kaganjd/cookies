var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, resp) {
  resp.cookie('t_swift_cookie', 'she wears short skirts, i wear tshirts');
  resp.end('has been here the whole time!');
});

app.listen(4000, function() {
  console.log('what youre looking for?')
})