/**
 * Template Literals
 * Custom Interpolation
 * Flexible expression interpolation for arbitary methods.
 * http://es6-features.org/#CustomInterpolation
 */

// get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`; //ES6
// get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux); //ES5
let bar = 1, baz = 2, quux = 'gooo';
const lenStr = String`http://example.com/foo?bar=${bar + baz}&quux=${quux}`.length;
console.log(lenStr);