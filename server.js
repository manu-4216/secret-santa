const nodeMailer = require('nodemailer');
require('dotenv').config();
const createRandomPairs = require('./utils/createRandomPairs');
const emailTemplate = require('./utils/emailTemplate');
// This will soon come from the frontend inside a POST form
const users = [
  { name: 'Rachel', email: 'rachel@gmail.com' },
  { name: 'Mike', email: 'mike@gmail.com' },
  { name: 'Dianne', email: 'dianne@gmail.com' },
  { name: 'mom', email: 'mom@gmail.com', language: 'ro' },
  { name: 'dad', email: 'dad@gmail.com', language: 'ro' },
];

const randomPairs = createRandomPairs(users);
console.log(randomPairs.map(pair => [pair[0].name, pair[1].name]));

const EMAIL_TYPE = 'oauth2';
const { EMAIL_USER, EMAIL_CLIENT_ID, EMAIL_CLIENT_TOKEN, EMAIL_REFRESH_TOKEN } = process.env;

const { TEST_EMAIL_ADDRESS } = process.env;
const listOfEmails = [TEST_EMAIL_ADDRESS];

const auth = {
  type: EMAIL_TYPE,
  user: EMAIL_USER,
  clientId: EMAIL_CLIENT_ID,
  clientSecret: EMAIL_CLIENT_TOKEN,
  refreshToken: EMAIL_REFRESH_TOKEN,
};

let transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: auth,
});

const [firstEmail, ...rest] = listOfEmails;
let mailOptions = {
  from: `Secret Santa <${EMAIL_USER}>`,
  to: firstEmail,
  bcc: rest,
  subject: 'Discover your Secret Santa!',
  html: emailTemplate({
    name: 'John',
    match: 'Arya',
    customMessage: 'Ho Ho Ho! Winter is coming!',
  }),
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ', info.response);
  }
});
