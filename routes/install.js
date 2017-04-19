const express = require('express');
const url = require('url');

const initInstall = function() {
  const router = new express.Router();
  
  router.get('/', function(req, res) {
    console.log('GET /install');
    const parsedUrl = url.parse(req.url, true);
    const shop = parsedUrl.query.shop;

    if (!req.session.access_token) {
      req.session.shopUrl = `https://${shop}`;
      // see https://help.shopify.com/api/sdks/merchant-apps/embedded-app-sdk/getting-started#oauth
      res.redirect('/escape-iframe');
    } else {
      res.redirect('/');
    }
  });

  return router;
};

module.exports = initInstall;