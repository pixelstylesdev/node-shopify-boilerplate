const express = require('express');
const path = require('path');
const fs = require('fs');
const config = require('../config');

const initRoot = function() {
  const router = new express.Router();
  
  /**
   * @GET /
   *
   * Serves the base index.html built from js build pipeline
   * in app/.
   */
  router.get('/', function(req, res) {
    console.log('GET /');
    
    let globalConfig = {
      apiKey: config.apiKey,
      shopUrl: req.session.shopUrl
    };

    // Inject server data into the global `window` object.
    // TODO - stream changes rather than modify file on disk
    const buildDir = path.resolve(__dirname, '../app/build/');
    const indexHtmlPath = `${buildDir}/index.html`;
    let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    indexHtml = indexHtml.replace('__SERVER_CONFIG__', JSON.stringify(globalConfig));
    fs.writeFileSync(indexHtmlPath, indexHtml);

    res.sendFile(`${buildDir}/index.html`);
  });

  return router;
};

module.exports = initRoot;