/* Lexical Scope */
let f1 = function () {
    let s = "hello world";

    let inner = function () {
        console.log(s);
    };
    inner();
};
f1();

/* Closure is a function that has access to the outer function's scope in which it was created even after the outer function has finished executing. */
let f2 = function () {
    let s = "hello world";

    return function () {
        console.log(s);
    };
};
let closure = f2();
closure();