const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode ? err.statusCode : 500;
  const message = err.message ? err.message : 'Ошибка на сервере';
  res.status(statusCode).send({ message });
  next();
};
module.exports = errorHandler;
