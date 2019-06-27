require('dotenv').config();
const Cryptr = require('cryptr');

const { CRYPTO_SECRET_KEY } = process.env;
const cryptr = new Cryptr('myTotalySecretKey');

const encrypt = word => cryptr.encrypt(word);
const decrypt = encryptedWord => cryptr.decrypt(encryptedWord);

module.exports = {
  encrypt,
  decrypt,
};
