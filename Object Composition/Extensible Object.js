/*
Create an object that can clone the functionality of another object into itself. Implement an extend(template) function that would copy all of the 
properties of template to the parent object and if the property is a function, add it to the object’s prototype instead.

Input / Output
Your code should return the extensible object instance. The extend() function of your object will receive a valid object as input parameter, and has no output.
*/

function solve() {
    let obj = {
        extend: function (objectInput) {
            for (const iterator of Object.keys(objectInput)) {
                typeof objectInput[iterator] === "function" ? Object.getPrototypeOf(obj)[iterator] = objectInput[iterator] : obj[iterator] = objectInput[iterator];
            }
        }
    }

    return obj;
}
