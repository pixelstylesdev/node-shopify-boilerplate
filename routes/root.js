const express = require('express');
const config = require('../config');

const initRoot = function() {
  const router = new express.Router();
  
  router.get('/', function(req, res) {
    console.log('GET /');
    res.render('index', {
      apiKey: config.apiKey,
      shopUrl: req.session.shopUrl
    });
  });

  return router;
};

module.exports = initRoot;