'use strict';



const mongoose = require('mongoose');
const comicCharacter = require('./character.js');
const comicSchema = mongoose.Schema({
  title: {type: String, required: true, unique: true},
  author: {type: String},
  characters: [{type: mongoose.Schema.Types.ObjectId, ref: 'characters'}],
});



comicSchema.pre('findOne', function(done){
  this.populate('characters');
  done();
});



module.exports = mongoose.model('comics', comicSchema);
