'use strict';

require('dotenv').config();
const createRandomPairs = require('./utils/createRandomPairs');
const sendEmails = require('./utils/sendEmails');
const indexTemplate = require('./utils/templates/index.js');

module.exports.handlePairCreation = (event, context, callback) => {
  const { people = [], customMessage = 'custom Message' } = JSON.parse(event.body);
  console.log(people);

  sendEmails({ pairs: createRandomPairs(people), customMessage, callback });

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
