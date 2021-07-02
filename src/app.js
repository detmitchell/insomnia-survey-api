const express = require('express');
const cors = require('cors');

const { errorConverter, errorHandler } = require('./middlewares/error');
const { v1 } = require('./routes');

const app = express();

app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use('/v1', v1);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;