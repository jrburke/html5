define(function(require, exports, module) {  // wrap in AMD

if(!Array.prototype.last) Object.defineProperty(Array.prototype, 'last', {
	value: function() { return this[this.length - 1] }
});

return function() {}  }); // return the module value and end AMD wrap
