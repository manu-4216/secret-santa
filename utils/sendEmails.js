const nodeMailer = require('nodemailer');
const emailTemplate = require('./templates/emailTemplate');
const emailWishlistTemplate = require('./templates/emailWishlistTemplate');
const { encrypt } = require('./cryptr');
require('dotenv').config();

const EMAIL_TYPE = 'oauth2';
const { EMAIL_USER, EMAIL_CLIENT_ID, EMAIL_CLIENT_TOKEN, EMAIL_REFRESH_TOKEN } = process.env;

const auth = {
  type: EMAIL_TYPE,
  user: EMAIL_USER,
  clientId: EMAIL_CLIENT_ID,
  clientSecret: EMAIL_CLIENT_TOKEN,
  refreshToken: EMAIL_REFRESH_TOKEN,
};

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: auth,
});

const sendMatchEmails = ({ pairs, customMessage, url, callback }) => {
  pairs.forEach(([user, match]) => {
    sendEmail({
      userEmail: user.email,
      userName: user.name,
      matchName: match.name,
      customMessage: customMessage,
      url: url,
      wishlistUrl: encrypt([match.email, match.name, user.name]), // This will allow us to send an email to the match, without a DB
    });
  });
};

const sendEmail = ({ userEmail, userName, matchName, customMessage, url, wishlistUrl }) => {
  const todaysDate = new Date();
  const year = todaysDate.getFullYear();

  let mailOptions = {
    from: `🎅🏻 Secret Santa <${EMAIL_USER}>`,
    to: userEmail,
    subject: `For ${userName}: your ${year} Secret Santa match is ...`,
    html: emailTemplate({
      name: userName,
      match: matchName,
      customMessage: customMessage,
      url: url,
      wishlistUrl: wishlistUrl,
    }),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      // callback(error);
    }

    console.log(info);
  });
};

const sendWishlistEmail = ({ userEmail, userName, matchName, wishlist, url = '' }) => {
  const todaysDate = new Date();
  const year = todaysDate.getFullYear();

  let mailOptions = {
    from: `🎅🏻 Secret Santa <${EMAIL_USER}>`,
    to: userEmail,
    subject: `For ${userName}: Your Secret Santa updated their Wishlist`,
    html: emailWishlistTemplate({
      userName,
      matchName,
      wishlist,
      url,
    }),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      // callback(error);
    }

    console.log(info);
  });
};

module.exports = {
  sendMatchEmails,
  sendEmail,
  sendWishlistEmail,
};
