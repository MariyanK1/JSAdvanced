/*
Can be passed as an argument to another function
*/

function sayHello() {
    return "Hello, ";
}

function greeting(helloMessage, name) {
    return helloMessage() + name;

}

console.log(greeting(sayHello, "Visitor!"));
