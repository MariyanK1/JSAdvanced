/*
Write a JS function that takes three string arguments as an input.
Calculate the sum of the length of the strings and the average length of the strings
rounded down to the nearest integer.

The input comes as three string arguments passed to your function.
The output should be printed on the console on two lines.
*/

function stringLength(str1 = String, str2 = String, str3 = String) {
    console.log(str1.length + str2.length + str3.length);
    
    let avg = Math.floor((str1.length + str2.length + str3.length) / 3)
    console.log(avg)
}

stringLength('chocolate', 'ice cream', 'cake')
