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
  const { wishlist, id } = JSON.parse(event.body);
  const { id2 } = JSON.parse(event.pathParameters);

  sendWishlistEmail({
    userEmail: decrypt(id),
    wishlist,
    url: '', // TO DO: replace with real one
  });

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: {
      wishlist,
      id,
      id2,
    },
  };

  callback(null, response);
};
