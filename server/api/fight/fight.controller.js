'use strict';

var _ = require('lodash');
var Fight = require('./fight.model');

// Get list of fights
exports.index = function(req, res) {
  Fight.find(function (err, fights) {
    if(err) { return handleError(res, err); }
    return res.json(200, fights);
  });
};

// Get a single fight
exports.show = function(req, res) {
  Fight.findById(req.params.id, function (err, fight) {
    if(err) { return handleError(res, err); }
    if(!fight) { return res.send(404); }
    return res.json(fight);
  });
};

// Creates a new fight in the DB.
exports.create = function(req, res) {
  Fight.create(req.body, function(err, fight) {
    if(err) { return handleError(res, err); }
    return res.json(201, fight);
  });
};

// Updates an existing fight in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Fight.findById(req.params.id, function (err, fight) {
    if (err) { return handleError(res, err); }
    if(!fight) { return res.send(404); }
    var updated = _.merge(fight, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, fight);
    });
  });
};

// Deletes a fight from the DB.
exports.destroy = function(req, res) {
  Fight.findById(req.params.id, function (err, fight) {
    if(err) { return handleError(res, err); }
    if(!fight) { return res.send(404); }
    fight.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}