require.paths.unshift(__dirname + '/../node_modules');
require.paths.unshift(__dirname + '/../lib');

global.assert = require('assert');
global.Gently = require('gently');

global.GENTLY = new Gently();
