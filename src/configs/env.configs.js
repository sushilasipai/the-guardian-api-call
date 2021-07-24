require("dotenv").config();

const config = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  ttl: process.env.TTL,
  api_url: process.env.API_URL,
  api_key: process.env.API_KEY,
};

module.exports = config;
