const express = require('express');

const initEscapeIframe = function() {
  const router = new express.Router();
  
  router.get('/', function(req, res) {
    console.log('GET /escape-iframe');
    res.render('escape-iframe');
  });

  return router;
};

module.exports = initEscapeIframe;