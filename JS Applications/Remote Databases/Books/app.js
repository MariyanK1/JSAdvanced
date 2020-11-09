function solve() {
    const url = 'https://softuniexercise-a2960.firebaseio.com/Books.json';
    const $submitButton = document.querySelector('body > form:nth-child(3) > button:nth-child(8)');
    const $loadBooksButton = document.querySelector('#loadBooks');
    const $titleInput = document.querySelector('#title');
    const $authorInput = document.querySelector('#author');
    const $isbnInput = document.querySelector('#isbn');
    const $tableBody = document.querySelector('body > table:nth-child(2) > tbody:nth-child(2)');


    //--The value of isbn's input tag has a typo--//

    $submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        fetch(url, {
            method: "POST",
            body: JSON.stringify({ "ISBN": $isbnInput.value, "author": $authorInput.value, "title": $titleInput.value })
        }).then(
            $isbnInput.value = '',
            $authorInput.value = '',
            $titleInput.value = ''
        )
            .catch(e => alert(e))
    })

    $loadBooksButton.addEventListener('click', () => {
        if ($tableBody.innerHTML !== '') {
            $tableBody.innerHTML = '';
        }


        fetch(url)
            .then(x => x.json())
            .then(data => {
                Object.entries(data).forEach(entry => {
                    const { ISBN, author, title } = entry[1];

                    const $tr = createEl('tr');
                    const $tdTitle = createEl('td', title);
                    const $tdAuthor = createEl('td', author);
                    const $tdISBN = createEl('td', ISBN);
                    const $tdButtons = createEl('td');
                    const $deleteBtn = createEl('button', 'Delete');
                    const $editBtn = createEl('button', 'Edit');

                    $tr.appendChild($tdTitle);
                    $tr.appendChild($tdAuthor);
                    $tr.appendChild($tdISBN);

                    $tdButtons.appendChild($editBtn);
                    $tdButtons.appendChild($deleteBtn);

                    $tr.appendChild($tdButtons);

                    $tableBody.appendChild($tr);

                    $editBtn.addEventListener('click', () => {

                    })
                })
            })
            .catch(e => alert(e));
    })

    function createEl(type, text) {
        const el = document.createElement(type);

        if (text) {
            el.textContent = text;
        }

        return el;
    }
}

solve()
