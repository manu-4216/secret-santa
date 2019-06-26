require('dotenv').config();
const sendEmails = require('./sendEmails');
const createRandomPairs = require('./createRandomPairs');
const assert = require('assert');

// These are my personal emails, so hide them
const { TEST_EMAIL_ADDRESS1, TEST_EMAIL_ADDRESS2 } = process.env;

const testFormData = {
  people: [
    {
      name: 'name1',
      email: TEST_EMAIL_ADDRESS1,
    },
    {
      name: 'name2',
      email: TEST_EMAIL_ADDRESS2,
    },
  ],
  customMessage: `ho ho ho`,
  url: '',
};

(async () => {
  try {
    var answer = await sendEmails({
      pairs: createRandomPairs(testFormData.people),
      customMessage: '',
      url: 'google.com',
    });
  } catch (error) {
    console.log(error);
  }
})();
