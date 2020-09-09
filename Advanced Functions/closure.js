/*
One of the most important features in Javascript.
The context of an inner function includes the scope of the outer function.
An inner function enjoys that context even after the parent function have returned.
A state is preserved in the outer function (closure).
*/

const f = (function () {

    let counter = 0;

    return function () {

        console.log(++counter);

    }

})();

f(); //1
f(); //2
f(); //3
f(); //4
f(); //5
f(); //6

