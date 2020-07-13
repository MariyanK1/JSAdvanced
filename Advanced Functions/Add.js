/*
Write a program that keeps a number inside its context and returns new function
that adds a given number to the previous one.

Input
Check the examples below to see how your code will be executed

Output
Your function should return the final result .

Examples

Input	
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));	

Output
7
8
*/


function solution(num) {
    return function(addNum) {
        return num + addNum
    }
}
