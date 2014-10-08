'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FightSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Fight', FightSchema);