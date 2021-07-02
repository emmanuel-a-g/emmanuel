const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../client/dist');

app.use(express.json());
app.use(express.static(DIST_DIR));

app.listen(port, () => {
  console.log('App listening on port: ' + port);
});