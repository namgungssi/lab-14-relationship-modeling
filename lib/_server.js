'use strict';



const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/pizza', {useMongoClient: true});


const app = module.exports = require('express')();


app.use('/api/1.0', require(__dirname + '/../routes/pizza-routes'));
app.use('/api/1.0', require(__dirname + '/../routes/beer-routes'));
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message || 'server error');
});


module.exports = {
  start: (port, cb) => {
    app.listen(port, cb);
    console.log(`Server is up on PORT ${process.env.PORT}!`);
  },
  stop: (cb) => app.close(cb),
};
