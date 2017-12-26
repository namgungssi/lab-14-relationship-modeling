'use strict';



const Book = require('../models/book.js');
const express = require('express');
const jsonParser = require('body-parser').json();
const bookRouter = module.exports = express.Router();



//post
bookRouter.post('/books', jsonParser, (req, res, next) => {
  if(!req.body.title)
    return res.status(400).send('missing title');
  let newBook = new Book(req.body);
  newBook.save()
    .then(res.send.bind(res))
    .catch(next);
});



//get a book
bookRouter.get('/books/:id', (req, res, next) => {
  Book.findOne({id: req.params.id})
    .then(book => {
      if(book === null) res.status(404).send('missing book id');
      res.status(200).send(book);
    })
    .catch(next);
});



//get all books
bookRouter.get('/books', (req, res, next) => {
  Book.find({})
  .then(res.send.bind(res))
  .catch(next);
});



//delete book
bookRouter.delete('/books/:id', (req, res, next) => {
  Book.remove({_id: req.params.id})
  .then(res.status(200).send('deleted'))
  .catch(next);
});




//
