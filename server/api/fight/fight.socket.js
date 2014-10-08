/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Fight = require('./fight.model');

exports.register = function(socket) {
  Fight.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Fight.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('fight:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('fight:remove', doc);
}