'use strict';



process.env.PORT = 27017;
process.env.MONGODB_URI = 'mongodb://localhost/test';


const request = require('superagent');
const server = require('../lib/_server.js');
const Character = require('../models/character.js');


let url = ('http://localhost:27017/api/characters');
let goodGuy = {name: 'tmnt'};
let badGuy = {name: 'shredder'};



describe('character-router', () => {
  var goodGuyID;

  beforeAll(() => {
    server.start();
    return Character.remove({});
  });
  afterAll(server.stop);



  describe('POST routes', () => {
    test('should return 200 and name', () => {
      return request.post(url)
        .send(goodGuy)
        .then(res => {
          goodGuyID = res.body._id;
          expect(res.status).toBe(200);
          expect(res.body.name).toBe(goodGuy.name);
        });
    });


    test('should return 400 if name missing', () => {
      return request.post(url)
        .send(badGuy)
        .catch(res => {
          expect(res.status).toBe(400);
        });
    });
  });



  describe('GET routes', () => {
    test('should return 200 and name', () => {
      return request.get(url)
        .then(res => {
          expect(res.status).toBe(200);
        });
    });


    test('should return specific name', () => {
      return request.get(`${url}/${goodGuyID}`)
        .then(res => {
          expect(res.body.name).toBe('tmnt');
        });
    });
  });
});
