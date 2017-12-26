'use strict';



module.exports = (err, req, res, next) => {
  console.log('ERROR', err);


  if(err.statusCode) res.sendStatus(err.statusCode);
  res.sendStatus(500);
};
