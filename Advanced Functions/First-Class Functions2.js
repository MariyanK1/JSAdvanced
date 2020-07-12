/*
Can be returned by another function.

We can do that, because we treated functions in JavaScript as a value.
*/

function sayHello() {
    return function () {
        console.log('Welcome, visitor! How can I assist you?');
    }
}
