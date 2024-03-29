const allowedOrigins = [
  'http://localhost:8080',
  'http://localhost:3000',
  'https://localhost:3000',
  'http://bb29ba4932fe.vps.myjino.ru/',
  'https://bb29ba4932fe.vps.myjino.ru/',
  'http://vakulina.space/',
  'https://vakulina.space/',
  'http://localhost:3001',
  'https://localhost:3001',
];
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,POST,PUT,PATCH,DELETE';

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);

    return res.end();
  }

  return next();
};

  return next();
};
