const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const mailRouter = require('./routes/mailer');

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api', mailRouter);

let port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
