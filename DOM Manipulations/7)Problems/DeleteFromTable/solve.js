/*

Write a program that takes an e-mail from an input field and deletes the matching row from a table. If
no entry is found, an error should be displayed in a "div"; with ID "result". The error should be "Not
found."; Submit only the deleteByEmail() function in judge.

*/

function deleteByEmail() {
    let emailInput = document.getElementsByName('email')[0];
    let result = document.getElementById('result');
    let td = document.getElementsByTagName('td');

    for (const iterator of td) {
        if (iterator.textContent === emailInput.value) {
            let parent = iterator.parentElement;
            parent.parentNode.removeChild(parent);
            result.textContent = 'Deleted';
            break;
        }
        
        result.textContent = 'Not found.'
    }
}
