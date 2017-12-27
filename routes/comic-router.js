'use strict';



const Comic = require('../models/comic.js');
const express = require('express');
const jsonParser = require('body-parser').json();
const comicRouter = module.exports = express.Router();



//post
comicRouter.post('/comics', jsonParser, (req, res, next) => {
  if(!req.body.title)
    return res.status(400).send('missing title');
  let newComic = new Comic(req.body);
  newComic.save()
    .then(res.send.bind(res))
    .catch(next);
});



//get a comic
comicRouter.get('/comics/:id', (req, res, next) => {
  Comic.findOne({id: req.params.id})
    .then(comic => {
      if(comic === null) res.status(404).send('missing comic id');
      res.status(200).send(comic);
    })
    .catch(next);
});



//get all comics
comicRouter.get('/comics', (req, res, next) => {
  Comic.find({})
  .then(res.send.bind(res))
  .catch(next);
});



//delete comic
comicRouter.delete('/comics/:id', (req, res, next) => {
  Comic.remove({_id: req.params.id})
  .then(res.status(200).send('deleted'))
  .catch(next);
});




//
