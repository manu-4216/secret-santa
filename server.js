const nodeMailer = require('nodemailer');
require('dotenv').config();

const EMAIL_TYPE = 'oauth2';
const {
  EMAIL_USER,
  EMAIL_CLIENT_ID,
  EMAIL_CLIENT_TOKEN,
  EMAIL_REFRESH_TOKEN
} = process.env;

const auth = {
  type: EMAIL_TYPE,
  user: EMAIL_USER,
  clientId: EMAIL_CLIENT_ID,
  clientSecret: EMAIL_CLIENT_TOKEN,
  refreshToken: EMAIL_REFRESH_TOKEN
};

let transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: auth
});

// setup email data with unicode symbols
let mailOptions = {
  from: `Secret Santa <${EMAIL_USER}>`,
  to: 'manu4216@gmail.com',
  subject: 'Hello world subject',
  html: '<b>Ha Ha Ha</b>'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ', info.response);
  }
});
