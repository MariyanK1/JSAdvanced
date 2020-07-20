const heading = document.getElementById('heading');
console.log(heading);

const list = document.getElementById('list');
console.log(list.textContent);

// list.textContent = 'Hi there';
console.log(list.innerHTML);

list.textContent = '<h1>Hi there</h1>';
