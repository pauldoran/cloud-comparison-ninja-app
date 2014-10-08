'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProviderSchema = new Schema({
  id: String,
  provider: String,
  region: String,
  type: String,
  cost: Number
});

module.exports = mongoose.model('Provider', ProviderSchema);
