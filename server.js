const express = require('express');
const path = require('path');

require('dotenv').config();
const logger = require('debug')('iReporter:server ');

const app = express();
const port = process.env.PORT;

app.use('/', express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, () => logger(`server started on ${port}`));
