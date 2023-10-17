/**
 * Modules
 * Value Export/Import
 * Support for exporting/importing values from/to modules without global namespace pollution.
 * http://es6-features.org/#ValueExportImport
 */
export function sum(x, y) { return x + y; }
export var pi = 3.141593;
export default (x) => Math.exp(x);