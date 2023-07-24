const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const NotFoundError = require('./errors/not-founded');
const { sendRequest } = require('./middlewares/send-request');

const app = express();
const { givePercentages } = require('./controllers/givePercentages');
const { parsePercentages } = require('./controllers/parsePercentages');
const corsHandler = require('./middlewares/cors-handler');

app.use(bodyParser.json());
app.use(corsHandler);
mongoose.connect('mongodb://database:27017/db', { });

app.post('/api/percentages', sendRequest);
app.post('/api/percentages', parsePercentages);
app.get('/api/percentages', givePercentages);

app.use((req, res, next) => {
  next(new NotFoundError('not found requested resource'));
});

app.use(errorHandler);
app.listen(5000);
