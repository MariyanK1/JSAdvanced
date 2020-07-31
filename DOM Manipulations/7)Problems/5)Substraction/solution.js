/*
Implement the above to provide the following functionality:
 Your function should take the values of "Number" and secondNumber, convert them to
numbers, subtract the second number from the first one and then append the result to the <div> with id="result".
 Your function should be able to work with any 2 numbers in the inputs, not only the ones given in
the example.

*/

function subtract() {
    const $firstInputElement = document.getElementById('firstNumber');
    const $secondInputElement = document.getElementById('secondNumber');
    const $divElement = document.getElementById('result');

    const result = +$firstInputElement.value - +$secondInputElement.value;

    $divElement.textContent = result;

}
