const { encrypt, decrypt } = require('./cryptr');
const assert = require('assert');

let encryptedWords;
let decryptedWords;

// Test with a simple word
encryptedWords = encrypt(['bacon', 'bread']);
decryptedWords = decrypt(encryptedWords);

assert.equal(decryptedWords[0], 'bacon');
assert.equal(decryptedWords[1], 'bread');

// Another test with an email
encryptedWords = encrypt(['testemail77@gmail.com']);
decryptedWords = decrypt(encryptedWords);

assert.equal(decryptedWords[0], 'testemail77@gmail.com');
