/*

Write a function that takes two positive numbers as input and compute the greatest common divisor.	
The input comes as two positive integer numbers.
The output should be printed on the console.

*/

function GCD(num1, num2) {

    let oldDivisor = 1;
    let newDivisor = 1;
    let smallest = Math.min(num1, num2);

    for (let i = oldDivisor; i <= smallest; i++) {

        if (num1 % i === 0 && num2 % i === 0) {
            newDivisor = i;
        }

        if (newDivisor > oldDivisor) {
            oldDivisor = newDivisor;
        }
    }

    console.log(oldDivisor);
}

GCD(15, 5)
