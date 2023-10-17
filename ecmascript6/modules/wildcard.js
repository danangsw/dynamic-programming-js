/**
 * Modules
 * Wildcard Import
 * Support for exporting/importing values from/to modules without global namespace pollution.
 * http://es6-features.org/#ValueExportImport
 */
import * as math from './export.js';
console.log(`2π = ${math.sum(math.pi, math.pi)}`);
