/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Perftestresult = require('./perftestresult.model');

exports.register = function(socket) {
  Perftestresult.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Perftestresult.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('perftestresult:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('perftestresult:remove', doc);
}