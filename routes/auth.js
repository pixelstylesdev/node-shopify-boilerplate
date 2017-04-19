const express = require('express');
const url = require('url');
const OAuth2 = require('oauth').OAuth2;
const config = require('../config');

const scopes = 'read_orders,read_products,read_shipping,write_shipping';

const getOauthInstance = function(shopUrl) {
  return new OAuth2(
    config.apiKey,
    config.apiSecret,
    shopUrl,
    '/admin/oauth/authorize',
    '/admin/oauth/access_token'
  );
};

const initAuth = function() {
  const router = new express.Router();
  
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
        console.log('unable to retrieve access token', error);
        res.send(500);
        return;
      } else {
        console.log('access token received!', access_token);
        req.session.access_token = access_token;
        res.redirect(`https://${shop}/admin/apps`);
      }
    };

    const oauth = getOauthInstance(`https://${shop}`);
    oauth.getOAuthAccessToken(code, {}, handleOauthResponse);
  });

  router.get('/code', function(req, res) {
    const oauth = getOauthInstance(req.session.shopUrl);
    const redirectUrl = oauth.getAuthorizeUrl({
      redirect_uri : `${config.appUrl}/auth`,
      scope: scopes
    });
    res.redirect(redirectUrl);
  });

  return router;
};

module.exports = initAuth;