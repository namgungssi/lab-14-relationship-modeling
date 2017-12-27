'use strict';



const express = require('express');
const jsonParser = require('body-parser').json();
const comicCharacter = require('../models/character.js');
const characterRouter = module.exports = express.Router();



//post
characterRouter.post('/characters', jsonParser, (req, res, next) => {
  if(!req.body.name)
    return res.status(400).send('missing name');

  let newCharacter = new comicCharacter(req.body);
  newCharacter.save()
    .then(res.send.bind(res))
    .catch(next);
});



//get
characterRouter.get('/characters/:id', (req, res, next) => {
  comicCharacter.findOne({_id: req.params.id})
    .then(character => {
      if(character === null) res.status(404).send('missing id');
      res.status(200).send(character);
    })
    .catch(next);
});



//get all
characterRouter.get('/characters', (req, res, next) => {
  comicCharacter.find({})
    .then(res.send.bind(res))
    .catch(next);
});



//delete
characterRouter.delete('/characters/:id', (req, res, next) => {
  comicCharacter.remove({_id: req.params.id})
    .then(res.status(200).send('character has been deleted'))
    .catch(next);
});
