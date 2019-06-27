const { encrypt, decrypt } = require('./cryptr');
const assert = require('assert');

let encryptedWord;
let decryptedWord;

// Test with a simple word
encryptedWord = encrypt('bacon');
decryptedWord = decrypt(encryptedWord);

assert.equal(decryptedWord, 'bacon');

// Another test with an email
encryptedWord = encrypt('testemail77@gmail.com');
decryptedWord = decrypt(encryptedWord);

assert.equal(decryptedWord, 'testemail77@gmail.com');
