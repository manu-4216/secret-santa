require('dotenv').config();

const { TWILIO_SID, TWILIO_SECRET, TWILIO_NUMBER, TEST_PHONE_NUMBER } = process.env;

// Not used for now
const client = require('twilio')(TWILIO_SID, TWILIO_SECRET);

client.messages
  .create({
    body: 'Hello there SMS',
    from: TWILIO_NUMBER,
    to: TEST_PHONE_NUMBER,
  })
  .then(message => console.log(message.sid))
  .catch(error => console.log(error));
