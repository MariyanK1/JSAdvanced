/*
Write a function that takes three number arguments as an input and find the largest of them. Print the
following text on the console: "The largest number is {number}."
The input comes as three number arguments passed to your function.
The output should be printed to the console.
*/

function largestNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) console.log(`The largest number is ${num1}.`)
    else if (num2 > num1 && num2 > num3) console.log(`The largest number is ${num2}.`)
    else console.log(`The largest number is ${num3}.`) 
}

largestNum(5, -3, 16)
