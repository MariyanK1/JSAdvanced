/*
Any function that returns a bool based on evaluation
of the truth of an assertion.

Predicates are often found in the form of callbacks
*/

let found = array1.find(isFound);

function isFound(element) {

return element > 10; 

}

console.log(found);
