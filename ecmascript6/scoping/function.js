/**
 * Scoping
 * Block-Scoped Functions
 * Block-Scoped function definitions.
 * http://es6-features.org/#BlockScopedFunctions
 */

{ 
    function foo() { return 1; }
    console.log(foo() === 1)
    { 
        function foo() { return 2; }
        console.log(foo() === 2)
    }
    console.log(foo() === 1)
}