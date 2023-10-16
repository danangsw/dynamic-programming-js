/**
 * Template Literals
 * Raw String Access
 * Access the raw template string content (backslashes are not interpreted)
 * http://es6-features.org/#RawStringAccess
 */

function quux (strings, ...values) {
    strings[0] === "foo\n"
    strings[1] === "bar"
    strings.raw[0] === "foo\\n"
    strings.raw[1] === "bar"
    values[0] === 42

    console.log({strings, values});
}
const q = quux`foo\n${42}bar`;
const raw = String.raw`foo\n${42}bar` === "foo\\n42bar";

console.log({q, raw});