/*
Write a function that takes an integer number as an input and check if all the digits in a given number are
the same or not.

Print on the console true if all numbers are same and false if not. On the next line print the sum of all the
digits.

The input comes as an integer number.
The output should be printed on the console.
*/


function sameNumbers(inputNumbers) {
    let numbers = inputNumbers.toString();

    let check = true;
    let sum = 0;

    let firstDigit = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
       sum += Number(numbers[i]);

       if (numbers[i] !== firstDigit) {
           check = false;
       }
    }

    console.log(check);
    console.log(sum);
}
