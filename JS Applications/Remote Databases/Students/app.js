function solve() {
    const $domElements = {
        tableBody: () => document.querySelector('#results > tbody'),
        submitBtn: () => document.querySelector('body > form > button'),
        firstNameInput: () => document.querySelector('#firstName'),
        lastNameInput: () => document.querySelector('#lastName'),
        facNumberInput: () => document.querySelector('#facultyNumber'),
        gradeInput: () => document.querySelector('#grade'),
        idInput: () => document.querySelector('#id')
    }

    $domElements.submitBtn().addEventListener('click', postStudent);

    function postStudent(e) {
        e.preventDefault();

        const body = {
            method: 'POST',
            body: JSON.stringify({
                id: $domElements.idInput().value,
                firstName: $domElements.firstNameInput().value,
                lastName: $domElements.lastNameInput().value,
                facultyNumber: $domElements.facNumberInput().value,
                grade: $domElements.gradeInput().value
            })
        }
        fetch('https://softuniexercise-a2960.firebaseio.com/Students.json', body)
            .then(fetchStudents)


    }
    function renderStudents(data) {
        const container = $domElements.tableBody();

        Object
            .keys(data)
            .forEach(key => {
                const { id, firstName, lastName, facultyNumber, grade } = data[key];

                const tableRow = createElement('tr', null, null, null,
                    createElement('td', id),
                    createElement('td', firstName),
                    createElement('td', lastName),
                    createElement('td', facultyNumber),
                    createElement('td', grade));


                container.appendChild(tableRow);

            })


    }

    function fetchStudents() {
        fetch('https://softuniexercise-a2960.firebaseio.com/Students.json')
            .then(r => r.json())
            .then(renderStudents)

        if ($domElements.tableBody().innerHTML !== '') {

            $domElements.tableBody().innerHTML = '';

            $domElements.idInput().value = '';
            $domElements.firstNameInput().value = '';
            $domElements.lastNameInput().value = '';
            $domElements.facNumberInput().value = '';
            $domElements.gradeInput().value = '';

        }
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

    fetchStudents()
}

solve()
