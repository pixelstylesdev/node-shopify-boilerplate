const express = require('express');
const url = require('url');
const utils = require('./utils');

const rootRouter = function() {
  const router = new express.Router();
  
  /**
   * @GET /auth
   */
  router.get('/', function(req, res) {
    console.log('GET /auth');

    const parsedUrl = url.parse(req.url, true);
    const shop = parsedUrl.query.shop;
    const code = parsedUrl.query.code;
    const hmac = parsedUrl.query.hmac;

    // TODO - hmac verification to ensure request is coming from Shopify (see docs)
    // validateHMAC(hmac);

    const handleOauthResponse = function(error, access_token, refresh_token) {
      if (error) {
        console.log('Unable to retrieve access token', error);
        res.sendStatus(500);
      } else {
        console.log('Access token received!', access_token);
        req.session.access_token = access_token;
        res.redirect(`https://${shop}/admin/apps`);
      }
    };

    const oauth = utils.getOauthInstance(`https://${shop}`);
    oauth.getOAuthAccessToken(code, {}, handleOauthResponse);
  });

  return router;
};

module.exports = rootRouter;