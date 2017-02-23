var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(request, response) {
  // Sets cookie key=value pair
  response.cookie('userID', '8QWEr6Ty9');
  // Ends get GET request and logs a message
  response.end('Success!\n' + 'Check your cookies');
});

app.listen(4000, function() {
  console.log('\n\nApp is up and running\n' + 'Listening on Port 4000...')
})

// Bonus Taylor Swift cookie
// Un-comment and replace lines 7-14 above with lines 19-26 below
//
// app.get('/', function(req, resp) {
//   resp.cookie('tSwiftCookie', 'She_wears_short_skirts_I_wear_t-shirts');
//   resp.end('...has been here the whole time!');
// });

// app.listen(4000, function() {
//   console.log('\n\nWhat youre looking for...')
// })
