/*Take other functions as an argument or return a function as a result*/

const sayHello = function () {

    return function () {

        console.log("Hello!");

    }
}
const myFunc = sayHello();

myFunc();
