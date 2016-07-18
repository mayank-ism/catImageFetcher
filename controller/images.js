var express = require('express'),
  request = require('request'),
  config = require(__dirname + '/..' + '/config/config'),
  router = express.Router(),
  logger = require(__dirname + '/..' + '/logger');

router.get('/:pageNumber', function(req, res) {
  if (req.xhr || req.headers.accept.indexOf('json') > -1) {
    var options = {
      url : config.url + 'phrase=cats&page_size=' + config.pageSize + '&page=' + req.params.pageNumber,
      headers : {
        'Api-Key' : config.apiKey
      }
    };

    function callback(error, response, body) {
      if(!error && response.statusCode == 200) {
        res.send(body);
      } else {
        logger.error("statusCode: " + response.statusCode + "\n"
          + "error: " + error);
      }
    }

    request.get(options, callback);
  } else {
    res.redirect('/');
  }
});

module.exports = router;
