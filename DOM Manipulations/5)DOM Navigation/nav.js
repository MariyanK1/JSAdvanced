const listItem = document.getElementById('list-item');
const list = document.querySelector('.list');

console.log(listItem.parentNode);
console.log(listItem.parentElement);
console.log(listItem.parentNode.parentNode);

console.log(list.childNodes);
console.log(list.children);
console.log(list.firstChild);
console.log(list.firstElementChild);

console.log(listItem.previousSibling);
console.log(listItem.nextSibling);

console.log(listItem.previousElementSibling);
console.log(listItem.nextElementSibling);
