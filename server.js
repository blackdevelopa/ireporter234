const express = require('express');
const path = require('path');

require('dotenv').config();
const logger = require('debug')('iReporter:server ');

const app = express();
const { PORT } = process.env;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => logger(`server started on ${PORT}`));
