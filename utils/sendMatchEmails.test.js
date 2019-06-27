require('dotenv').config();
const { sendMatchEmails } = require('./sendEmails');
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
  url: 'google.com',
};

(async () => {
  try {
    var answer = await sendMatchEmails({
      pairs: createRandomPairs(testFormData.people),
      customMessage: testFormData.customMessage,
      url: testFormData.url,
    });
  } catch (error) {
    console.log(error);
  }
})();
