const MarketCap = require('../models/marketcap');

module.exports.parsePercentages = (req, res, next) => {
  const { data } = req;
  Object.keys(data).forEach((key) => {
    MarketCap.replaceOne({ name: key }, { name: key, percentage: data[key] }, { upsert: true })
      .orFail(new Error('Not Found'))
      .catch((err) => next(err));
  });
  res.status(200).send({ message: 'The data is recorded in the database' });
};
