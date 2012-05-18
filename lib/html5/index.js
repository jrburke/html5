define(function(require, exports, module) {  // wrap in AMD

exports.HTML5 = exports;

exports.HTML5.moduleName = 'HTML5';

require('./constants');
require('./tokenizer');
require('./treebuilder');
require('./treewalker');
require('./serializer');
require('./parser');
require('./debug');


return function() {}  }); // return the module value and end AMD wrap
