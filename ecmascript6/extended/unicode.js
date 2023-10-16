/**
 * Extended Literals
 * Unicode String & RegExp Literal
 * Extended support using Unicode within strings and regular expressions.
 * http://es6-features.org/#UnicodeStringRegExpLiteral
 */

"𠮷".length === 2
"𠮷".match(/./u)[0].length === 2
"𠮷" === "\uD842\uDFB7"
"𠮷" === "\u{20BB7}"
"𠮷".codePointAt(0) == 0x20BB7
for (let codepoint of "𠮷") console.log(codepoint)