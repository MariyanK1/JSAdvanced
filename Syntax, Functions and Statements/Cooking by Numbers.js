/*
Write a program that receives a number and a list of five operations. Perform the operations sequentially
by starting with the input number and using the result of every operation as starting point for the next
one. Print the result of every operation in order.

The operations can be one of the following:
* chop - divide the number by two
* dice - square root of number
* spice - add 1 to number
* bake - multiply number by 3
* fillet - subtract 20% from number
The input comes as an array of 6 string elements. The first element is the starting point and must be
parsed to a number. The remaining 5 elements are the names of the operations to be performed.
The output should be printed on the console.

*/


function cookingByNumbers(input = []) {
    let num = Number(input.shift())

    while (input.length > 0) {
        let command = input.shift();

        switch (command) {
            case 'chop':
                console.log(num = num / 2);
                break;
            case 'dice':
                console.log(num = Math.sqrt(num));
                break;
            case 'spice':
                console.log(num += 1);
                break;
            case 'bake':
                console.log(num *= 3);
                break;
            default:
                let x = num * 0.20;
                console.log(num -= x);
                break;
        }
    }
}

cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])
