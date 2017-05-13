const OAuth2 = require('oauth').OAuth2;
const config = require('../../config');

/**
 * Instantiate an OAuth instance with various
 * OAuth utlities. See https://github.com/ciaranj/node-oauth
 * for more information.
 * 
 * @param {String} shopUrl The shop url.
 */
const getOauthInstance = function(shopUrl) {
  return new OAuth2(
    config.apiKey,
    config.apiSecret,
    shopUrl,
    '/admin/oauth/authorize',
    '/admin/oauth/access_token'
  );
};

module.exports = {
  getOauthInstance: getOauthInstance
};