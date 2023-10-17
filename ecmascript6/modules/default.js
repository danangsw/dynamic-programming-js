/**
 * Modules
 * Default Import
 * Marking a value as the default exported value and mass-mixin of values.
 * http://es6-features.org/#DefaultWildcard
 */
import exp, { pi, sum } from './export.js';
console.log(`2π = ${sum(pi, pi)}`);
console.log(`e^{π} = ${exp(pi)}`);
