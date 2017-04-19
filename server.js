const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const routes = require('./routes');

const app = express();

//support json and url encoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//setup encrypted session cookies
app.use(cookieParser());
app.use(cookieSession({
    secret: "--express-session-encryption-key--"
}));

//statically serve from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

//use jade templating engine for view rendering
app.set('view engine', 'jade');

app.use(routes());

app.listen(3000, function() {
  console.log('Server listnening on port 3000');
});