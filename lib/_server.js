'use strict';



require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/dogs', {useMongoClient: true});)
