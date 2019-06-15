const createRandomPairs = require('./createRandomPairs');
const assert = require('assert');

const arr = ['Rachel', 'Mike', 'Dianne', 'mom', 'dad'];
const randomPairs = createRandomPairs(arr);

assert.equal(randomPairs.length, arr.length);
assert.equal(randomPairs[0].length, 2);

const [firstPair] = randomPairs;
const [item1, item2] = firstPair;

assert.equal(arr.includes(item1) >= 0, true);
assert.equal(arr.includes(item2) >= 0, true);
