const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const routes = require('./routes');

const app = express();

// Support json and url encoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup encrypted session cookies
app.use(cookieParser());
app.use(cookieSession({
    secret: "--express-session-encryption-key--"
}));

// Statically serve from the 'app/build/static' folder.
// Contains client-side assets from the js build pipeline.
app.use('/static', express.static(path.join(__dirname, 'app/build/static')));

// Use jade templating engine for view rendering
app.set('view engine', 'jade');

app.use(routes());

app.listen(3000, function() {
  console.log('Server listnening on port 3000');
});