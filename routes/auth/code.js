const express = require('express');
const config = require('../../config');
const utils = require('./utils');

const scopes = 'read_orders,read_products,read_shipping,write_shipping';

const codeRouter = function() {
  const router = new express.Router();

  /**
   * @GET /auth/code
   */
  router.get('/', function(req, res) {
    console.log('GET /auth/code');

    const oauth = utils.getOauthInstance(req.session.shopUrl);
    const redirectUrl = oauth.getAuthorizeUrl({
      redirect_uri : `${config.appUrl}/auth`,
      scope: scopes
    });
    res.redirect(redirectUrl);
  });

  return router;
};

module.exports = codeRouter;