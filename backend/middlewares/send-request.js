const request = require('request');

module.exports.sendRequest = (req, res, next) => {
  request('https://api.coingecko.com/api/v3/global', { json: true }, (err, response, body) => {
    if (err) {
      const error = err;
      error.statusCode = 500;
      error.message = 'the server could not get the data';
      next(error);
    }

    req.data = body.data.market_cap_percentage;
    next();
  });
};
