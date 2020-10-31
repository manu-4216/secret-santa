'use strict';

const createRandomPairs = require('./utils/createRandomPairs');
const { sendMatchEmails, sendWishlistEmail } = require('./utils/sendEmails');
const indexTemplate = require('./utils/templates/index.js');
const wishlistTemplate = require('./utils/templates/wishlistTemplate');
const { decrypt } = require('./utils/cryptr');

module.exports.handlePairCreation = (event, context, callback) => {
  const { people = [], customMessage = '', url = '' } = JSON.parse(event.body);

  sendMatchEmails({
    pairs: createRandomPairs(people),
    customMessage,
    url,
    callback,
  });

  callback(null, { statusCode: 200, body: JSON.stringify({ people, customMessage }) });
};

module.exports.index = (event, context, callback) => {
  const html = indexTemplate;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  callback(null, response);
};

module.exports.wishlist = (event, context, callback) => {
  const html = wishlistTemplate;

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };

  callback(null, response);
};

module.exports.handleWishlistSubmision = (event, context, callback) => {
  const { wishlist, id, url } = JSON.parse(event.body);
  const [userEmail, userName, matchName] = decrypt(id);

  sendWishlistEmail({
    userEmail,
    userName,
    matchName,
    wishlist,
    url,
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      wishlist,
      id,
    }),
  };

  callback(null, response);
};
