var express = require('express'),
  config = require(__dirname + '/..' + '/config/config'),
  router = express.Router();

router.use('/images', require(__dirname + '/images'));

module.exports = router;
