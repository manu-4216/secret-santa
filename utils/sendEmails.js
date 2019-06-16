const nodeMailer = require('nodemailer');
const emailTemplate = require('./emailTemplate');

const EMAIL_TYPE = 'oauth2';
const { EMAIL_USER, EMAIL_CLIENT_ID, EMAIL_CLIENT_TOKEN, EMAIL_REFRESH_TOKEN } = process.env;

const auth = {
  type: EMAIL_TYPE,
  user: EMAIL_USER,
  clientId: EMAIL_CLIENT_ID,
  clientSecret: EMAIL_CLIENT_TOKEN,
  refreshToken: EMAIL_REFRESH_TOKEN,
};

let transporter;

module.exports = ({ pairs, customMessage }) => {
  transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: auth,
  });

  pairs.forEach(([user, match]) => {
    sendEmail({
      userEmail: user.email,
      userName: user.name,
      matchName: match.name,
      customMessage,
    });
  });
};

const sendEmail = ({ userEmail, userName, matchName, customMessage }) => {
  let mailOptions = {
    from: `Secret Santa <${EMAIL_USER}>`,
    to: userEmail,
    subject: 'Discover your Secret Santa!',
    html: emailTemplate({
      name: userName,
      match: matchName,
      customMessage: customMessage,
    }),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    }
  });
};
