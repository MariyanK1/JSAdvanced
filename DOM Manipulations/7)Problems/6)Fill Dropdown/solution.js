/*
Your task is to take values from input fields with ids "newItemText" and "newItemValue". Then you
should create and append an option to the "select" menu with id="menu".

*/


function addItem() {

    const $elements = {
        inputText : document.getElementById('newItemText'),
        inputValue : document.getElementById('newItemValue'),
        selectMenu : document.getElementById('menu')
    };

    const $option = document.createElement('option');

    $option.textContent = $elements.inputText.value;
    $option.value = $elements.inputValue.value;

    $elements.selectMenu.appendChild($option);

    $elements.inputText.value = "";
    $elements.inputValue.value = "";
}
