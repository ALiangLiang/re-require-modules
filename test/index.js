const fs = require('fs'),
  assert = require('assert'),
  REquire = require('../');

const re = new REquire(true, './testModule');

fs.writeFileSync('test/testModule.js', 'module.exports = function(){console.log("new");return 2;}');
setTimeout(function() {
  assert(re.testModule() === 2, 'failed');
  fs.writeFileSync('test/testModule.js', 'module.exports = function(){console.log("old");return 1;}');
}, 500);
