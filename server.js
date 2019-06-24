const express = require('express');
require('dotenv').config();
const createRandomPairs = require('./utils/createRandomPairs');
const sendEmails = require('./utils/sendEmails');

const port = process.env.PORT || 3000;

const app = express();

// Middleware:
app.use(express.urlencoded({ extended: false }));

// Route handling
app.post('/form', (req, res) => {
  const { people, customMessage } = req.body;

  sendEmails({ pairs: createRandomPairs(people), customMessage });
});

app.listen(port, () => console.log(`Server listening on port ${port}.`));
