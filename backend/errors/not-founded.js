class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'FoundError';
    this.statusCode = 404;
  }
}
module.exports = NotFoundError;
