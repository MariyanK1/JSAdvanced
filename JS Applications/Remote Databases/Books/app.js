function solve() {
    const url = 'https://softuniexercise-a2960.firebaseio.com/Books.json';
    const $domElements = {
        loadButton: () => document.querySelector('#loadBooks'),
        submitButton: () => document.querySelector('body > form:nth-child(3) > button:nth-child(8)'),
        createTitleInput: () => document.querySelector('#title'),
        authorInput: () => document.querySelector('#author'),
        isbnInput: () => document.querySelector('#isbn'),
        bookContainer: () => document.querySelector('tbody'),
        editTitleInput: () => document.querySelector('#edit-title'),
        editAuthorInput: () => document.querySelector('#edit-author'),
        editIsbnInput: () => document.querySelector('#edit-isbn'),
        editForm: () => document.querySelector('#edit-form'),
        editBtn: () => document.querySelector('#edit-form > button')

    }

    window.onload = $domElements.bookContainer().innerHTML = '';

    $domElements.loadButton().addEventListener('click', fetchAllBooks);

    $domElements.submitButton().addEventListener('click', submitBooks);

    $domElements.editBtn().addEventListener('click', patchBook);

    function deleteBook(e) {
        const id = e.target.classList.value;
        const newUrl = `https://softuniexercise-a2960.firebaseio.com/Books/${id}.json`;

        const body = {
            method: 'DELETE'
        }
        fetch(newUrl, body).then(fetchAllBooks)

    }

    function patchBook(e) {
        e.preventDefault();
        const id = e.target.classList.value;
        const newUrl = `https://softuniexercise-a2960.firebaseio.com/Books/${id}.json`;

        const body = {
            method: 'PATCH',
            body: JSON.stringify({
                title: $domElements.editTitleInput().value,
                author: $domElements.editAuthorInput().value,
                ISBN: $domElements.editIsbnInput().value
            })
        }

        fetch(newUrl, body)
            .then(r => r.json())
            .then(fetchAllBooks, $domElements.editForm().style.display = 'none');
    }

    function submitBooks(e) {
        e.preventDefault();

        const $titleInputValue = $domElements.createTitleInput().value;
        const $authorInputValue = $domElements.authorInput().value;
        const $isbnInputValue = $domElements.isbnInput().value;

        const obj = {
            method: 'POST',
            body: JSON.stringify({ "title": $titleInputValue, "author": $authorInputValue, "ISBN": $isbnInputValue })
        }

        fetch(url, obj)
            .then(fetchAllBooks(url))
            .catch(e => console.log(e));
    }

    function fetchAllBooks() {
        fetch(url)
            .then(res => res.json())
            .then(renderBooks)
            .catch(error => alert(error));
    }

    function editBooks(e) {
        e.preventDefault();
        const id = e.target.classList.value;
        $domElements.editBtn().classList = id;
        const newUrl = `https://softuniexercise-a2960.firebaseio.com/Books/${id}.json`
        $domElements.editForm().style.display = 'block';
        fetch(newUrl)
            .then(r => r.json())
            .then(({ title, author, ISBN }) => {
                $domElements.editIsbnInput().value = ISBN;
                $domElements.editTitleInput().value = title;
                $domElements.editAuthorInput().value = author;
            })

        scrollBy(0, 10000);
    }

    function renderBooks(data) {
        const container = $domElements.bookContainer();

        $domElements.bookContainer().innerHTML = ''

        Object
            .keys(data)
            .forEach(id => {
                const { ISBN, author, title } = data[id];
                const tableRow = createElement('tr', null, null, null,
                    createElement('td', title),
                    createElement('td', author),
                    createElement('td', ISBN),
                    createElement('td', null, null, null,
                        createElement('button', 'Edit', { 'class': id }, { click: editBooks }),
                        createElement('button', 'Delete', { 'class': id }, { click: deleteBook })));

                container.appendChild(tableRow);
            })
    }

    function createElement(element, text, attr, event, ...children) {
        const el = document.createElement(element);

        if (text) {
            el.textContent = text;
        }

        if (attr) {
            Object.entries(attr).forEach(([attrKey, attrValue]) => {
                el.setAttribute(attrKey, attrValue);
            });
        }

        if (event) {
            Object.entries(event).forEach(([name, handler]) => {
                el.addEventListener(name, handler);
            });
        }


        if (children) {
            children.forEach(child => {
                el.appendChild(child);
            });
        }

        return el;
    }
}


solve()
