const express = require('express');
const root = require('./root');
const code = require('./code');

const authRouter = function() {
  const router = new express.Router();

  router.use('/', root());
  router.use('/code', code());

  return router;
};

module.exports = authRouter;