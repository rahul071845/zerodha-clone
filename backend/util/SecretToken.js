require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  const tokenExpiryInSeconds =  2 * 60 * 60;
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: tokenExpiryInSeconds,
  });
};
