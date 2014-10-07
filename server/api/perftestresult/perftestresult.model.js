'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PerftestresultSchema = new Schema({
  perf: Schema.Types.Mixed,
  specs: Schema.Types.Mixed
});

module.exports = mongoose.model('Perftestresult', PerftestresultSchema);
