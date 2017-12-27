'use strict';



const mongoose = require('mongoose');
const Comic = require('./comic.js');
const characterSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
  comic: {type: mongoose.Schema.Types.ObjectId, ref: 'comics'},
});



characterSchema.pre('save', function(done){
  Comic.findById(this.comic)
    .then(comic => {
      if(!comic)
        return Promise.reject();
      this.comic = comic._id;
      return Promise.resolve();
    })
    .then((done)).catch(done);
});



module.exports = mongoose.model('characters', characterSchema);
