/*
A state is preserved in the outer function (closure)
*/

const f = (function () {

let counter = 0;

return function () {

console.log(++counter);

}

})();
