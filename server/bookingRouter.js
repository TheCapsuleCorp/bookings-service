const express = require('express');
const bookingRouter = express.Router();
const mongoose = require('mongoose');
const db = require('../database/model.js');
const path = require('path');

console.log('current working directory: ', path.resolve());
console.log('test: ', path.resolve('./public/index.html'));

bookingRouter
  .route('/:roomid/bookings')
  .get((req, res, next) => res.sendFile('index.html', {root: path.resolve('public')}))
  .options((req, res) => {
    res.sendStatus(200);
  });

module.exports = bookingRouter;
