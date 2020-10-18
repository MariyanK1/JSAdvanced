/*
Use the given skeleton to solve this problem.
Note: You have NO permission to change directly the given HTML (index.html file).

Your Task
Write the missing JavaScript code to make the Pet Me application work as expected.  
Each new registered pet must have Name, Age, Kind and Current Owner. 
When you click the [Add] button and only if all inputs are filled and the age is a number, then a new list item should be added to the section with id "adoption".
Don't forget to clear the inputs when you add a new pet.


Already added pets:

 
You should create a li element that contains paragraph element with the name, age and kind of the new pet,
follow the format “{ name } is a { years } year old { kind }” , where  name, years and kind are in a strong elements inside the paragraph.
After that we have span element with “Owner: { owner name }” and a button [Contact with owner].
When you click the [Contact with owner] button an input appears and the button changes to [ Yes! I take it! ].

Moving pets into the new home section
When you click the [Yes! I take it!] button if there is entered name you should move the current list item to the adopted section.

Here we have changed the owner name with the new one. And the button is [Checked]. We have the next HTML structure:

And in the end button [Checked] must delete the current list item.

*/


function solve() {
    const $elements = {
        addButton: document.getElementsByTagName('button')[0],
        input: document.querySelectorAll("input[type=text]"),
        ulAdoption: document.getElementById('adoption').querySelector('ul'),
        ulAdopted: document.getElementById('adopted').querySelector('ul')
    }

    let name = $elements.input[0];
    let age = $elements.input[1];
    let kind = $elements.input[2];
    let owner = $elements.input[3];

    $elements.addButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (
            !name.value ||
            !age.value ||
            !kind.value ||
            !owner.value ||
            Number.isNaN(Number(age.value))
        ) {
            return;
        }

        let li = createEl('li');
        let p = createEl('p');
        let strong1 = createEl('strong', name.value);
        let strong2 = createEl('strong', age.value);
        let strong3 = createEl('strong', kind.value);
        let span = createEl('span', `Owner: ${owner.value}`);
        let button = createEl('button', "Contact with owner");

        p.appendChild(strong1);
        p.innerHTML += ' is a ';
        p.appendChild(strong2);
        p.innerHTML += ' year old ';
        p.appendChild(strong3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(button);

        $elements.ulAdoption.appendChild(li);
        name.value = '';
        kind.value = '';
        owner.value = '';
        age.value = '';

        button.addEventListener('click', (e) => {
            let div = createEl('div');
            let input = createEl('input');
            input.placeholder = "Enter your names";
            let buttonTakeIt = createEl('button', "Yes! I take it!");

            div.appendChild(input);
            div.appendChild(buttonTakeIt);
            li.appendChild(div);
            e.target.remove();

            buttonTakeIt.addEventListener('click', (e) => {
                if (input.value) {
                    let newSpan = createEl('span', `New owner: ${input.value}`);
                    let checkedButton = createEl('button', 'Checked');
                    let parentDiv = e.target.parentNode;
                    let parent = parentDiv.parentNode;

                    parentDiv.removeChild(input);
                    parentDiv.removeChild(buttonTakeIt);

                    parent.removeChild(parentDiv);
                    parent.removeChild(span);

                    parent.appendChild(newSpan);
                    parent.appendChild(checkedButton);

                    $elements.ulAdopted.appendChild(parent);
                    e.target.remove();

                    checkedButton.addEventListener('click', (e) => {
                        parent.remove();
                    })
                }
            })
        })
    });

    function createEl(tagName, text) {
        let element = document.createElement(tagName);

        if (text) {
            element.textContent = text;
        }

        return element;
    }
}
