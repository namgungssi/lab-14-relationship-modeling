'use strict';



const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const express = require('express');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(morgan('dev'));



//routes
app.use('/api', require('../routes/character-router.js'));
app.use('/api', require('../routes/comic-router.js'));
app.all('*', (req, res) => res.sendStatus(404));
app.use(require('./error.js'));
//error middleware



let server = null;
module.exports = {
  start: () => {
    return new Promise((resolve, reject) => {
      if(server) {
        return reject(new Error('server is already running'));
      }

      server = app.listen(process.env.PORT || 3000, () => {
        console.log(`server is up on port: ${process.env.PORT}`);
        resolve();
      });
    })
      .then(() => {
        mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});
      });
  },

  stop: () => {
    return new Promise((resolve, reject) => {
      if(!server) {
        return reject(new Error('server is off'));
      }
      server.close(() => {
        server = null;
        console.log('server off');
        resolve();
      });
    })
      .then(() => mongoose.disconnect());
  },
};
