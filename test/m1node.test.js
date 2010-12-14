var common = require('./common'),
    m1node = require('m1node'),
    express = require('express');

var tests = {
    'inherit from express': function(done) {
        var server = m1node.createServer();
        assert.ok(server instanceof express.Server);
        done();
    },
    
    'express middleware autoloaded': function(done) {
        assert.equal(m1node.errorHandler, express.errorHandler);
        done();
    }
};

module.exports = tests;
