require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV,
  port: 3000,
  mongoose: {
    url: process.env.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};