require.paths.unshift(__dirname + '/../../node_modules');

var exports = module.exports = require('express');

exports.createServer = function() {
    return new exports.Server(Array.prototype.slice.call(arguments));
};
