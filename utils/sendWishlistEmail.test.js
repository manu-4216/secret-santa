require('dotenv').config();
const { sendWishlistEmail } = require('./sendEmails');
// const assert = require('assert');

// These is my personal email, so hide it
const { TEST_EMAIL_ADDRESS1 } = process.env;

(async () => {
  try {
    var answer = await sendWishlistEmail({
      userEmail: TEST_EMAIL_ADDRESS1,
      wishlist: ['item1', 'item2'],
    });
  } catch (error) {
    console.log(error);
  }
})();
