const express = require('express');
const root = require('./root');
const install = require('./install');
const auth = require('./auth');
const escapeIframe = require('./escape-iframe');

const initRouter = function() {
  const router = new express.Router();

  router.use('/', root());
  router.use('/install', install());
  router.use('/auth', auth());
  router.use('/escape-iframe', escapeIframe());

  return router;
};

module.exports = initRouter;