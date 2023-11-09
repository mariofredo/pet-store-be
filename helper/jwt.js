const jwt = require("jsonwebtoken");
require("dotenv").config();
const TOKEN = process.env.SECRET_TOKEN;

const sign = (payload) => {
  return jwt.sign(payload, TOKEN);
};

const verify = (token) => {
  return jwt.verify(token, TOKEN);
};

module.exports = {
  sign,
  verify,
};
