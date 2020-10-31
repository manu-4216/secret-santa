require('dotenv').config();
const Cryptr = require('cryptr');

const { CRYPTO_SECRET_KEY } = process.env;
const cryptr = new Cryptr('CRYPTO_SECRET_KEY');

const SEPARATOR = '///';
const encrypt = words => cryptr.encrypt(words.join(SEPARATOR));
const decrypt = encryptedWords =>
  cryptr
    .decrypt(encryptedWords)
    .split(SEPARATOR)
    .filter(Boolean);

module.exports = {
  encrypt,
  decrypt,
};
