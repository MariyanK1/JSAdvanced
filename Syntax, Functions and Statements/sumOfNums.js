/*
Write a JS function that takes two numbers n and m as an input
and prints the sum of all numbers from n to m.

The input comes as two string elements that need to be parsed as numbers.
The output should return the sum.

*/

function sumOfNums(num, num2) {
    num = +num;
    num2 = +num2;
    let sum = 0;

    for (let i = num; i <= num2; i++) {
        sum += i
    }

    console.log(sum);
}
