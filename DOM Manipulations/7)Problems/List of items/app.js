/*Write a function that read the text inside an input field and appends the specified text to a list inside an HTML page.*/

function addItem() {
    let inputValue = document.getElementById("newItemText").value;
    let items = document.getElementById("items");
    let listItems = document.createElement("li");
    listItems.innerHTML = inputValue;
    items.appendChild(listItems);
    document.getElementById("newItemText").value = "";
}
