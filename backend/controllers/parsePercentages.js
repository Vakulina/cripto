const MarketCap = require('../models/marketcap');

module.exports.parsePercentages = async (req, res, next) => {
  const { data } = req;
  try {
    Object.keys(data).map(async (key) => {
      await MarketCap.replaceOne({ name: key }, { name: key, percentage: data[key] }, { upsert: true });
    });
    res.status(200).send({ message: 'The data is recorded in the database' });
  } catch (err) {
    res.status(500).send({ message: 'The data is not recorded in the database' });
    next(err);
  }
};
