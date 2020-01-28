const express = require('express');

require('dotenv').config();

const server = express();

let port = 1234;
server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
