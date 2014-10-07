'use strict';

var _ = require('lodash');
var Perftestresult = require('./perftestresult.model');

// Get list of perftestresults
exports.index = function(req, res) {
  Perftestresult.find(function (err, perftestresults) {
    if(err) { return handleError(res, err); }
    return res.json(200, perftestresults);
  });
};

// Get a single perftestresult
exports.show = function(req, res) {
  Perftestresult.findById(req.params.id, function (err, perftestresult) {
    if(err) { return handleError(res, err); }
    if(!perftestresult) { return res.send(404); }
    return res.json(perftestresult);
  });
};

// Creates a new perftestresult in the DB.
exports.create = function(req, res) {
  Perftestresult.create(req.body, function(err, perftestresult) {
    if(err) { return handleError(res, err); }
    return res.json(201, perftestresult);
  });
};

// Updates an existing perftestresult in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Perftestresult.findById(req.params.id, function (err, perftestresult) {
    if (err) { return handleError(res, err); }
    if(!perftestresult) { return res.send(404); }
    var updated = _.merge(perftestresult, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, perftestresult);
    });
  });
};

// Deletes a perftestresult from the DB.
exports.destroy = function(req, res) {
  Perftestresult.findById(req.params.id, function (err, perftestresult) {
    if(err) { return handleError(res, err); }
    if(!perftestresult) { return res.send(404); }
    perftestresult.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}