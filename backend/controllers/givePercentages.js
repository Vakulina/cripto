const NotFoundError = require('../errors/not-founded');
const MarketCap = require('../models/marketcap');

module.exports.givePercentages = (req, res, next) => {
  MarketCap.count().then((count) => {
    if (count) {
      MarketCap.find({})
        .then((rows) => {
          res.header('Cache-Control', 'no-store');
          res.send({ data: rows });
        })
        .catch(() => {
          next(new NotFoundError('no data found'));
        });
    } else {
      next(new NotFoundError('not found requested resource'));
    }
  });
};
