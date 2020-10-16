/*
Write the missing JavaScript code to make the Task Manager Functionality works as follows: 
When the Add button is clicked, first you need to validate the inputs. If any of the input fields is empty, the function doesn’t make anything. 
After validating the input fields, you need to add the new task (article) in “Open” section. 

The article should have two buttons “Start” and “Delete”. Be careful to set the classes for the buttons and the parent-div.
When the “Start” button is clicked, you need to move the Task in the section “In Progress”. Be careful with the buttons!

When the “Delete” button is clicked, the Task (whole article) should be removed from the HTML. 
After clicking the “Finish” button, the Task will be completed, and you should move the article in the section “Complete”.
The buttons with their parent div-element should be removed.

*/

function solve() {

    let task = document.querySelector('#task');
    let description = document.querySelector('#description');
    let date = document.querySelector('#date');
    let addBtn = document.querySelector('#add');
    let section = document.querySelectorAll('section');

    let openDiv = section.item(1).querySelectorAll('div').item(1);
    let progressDiv = section.item(2).querySelectorAll('div').item(1);
    let finishDiv = section.item(3).querySelectorAll('div').item(1);

    addBtn.addEventListener('click', function (e) {
        e.preventDefault();

        let taskValue = task.value;
        let descriptionValue = description.value;
        let dateValue = date.value;

        if (taskValue && descriptionValue && dateValue) {
            let article = document.createElement('article');

            let h3 = createEl('h3', taskValue);
            let p1 = createEl('p', `Description: ${descriptionValue}`);
            let p2 = createEl('p', `Due Date: ${dateValue}`);
            let div = createEl('div', "", "flex");

            let startBtn = createEl('button', 'Start', 'green');
            let deleteBtn = createEl('button', 'Delete', 'red');
            let finishBtn = createEl('button', 'Finish', 'orange');

            openDiv.appendChild(article);
            div.appendChild(startBtn);
            div.appendChild(deleteBtn);

            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(div);

            startBtn.addEventListener("click", () => {
                progressDiv.appendChild(article);
                startBtn.remove();
                div.appendChild(finishBtn)
            });

            deleteBtn.addEventListener("click", () => {
                article.remove();
            });

            finishBtn.addEventListener("click", () => {
                finishDiv.appendChild(article);
                div.remove()
            })
        }
    })


    function createEl(element, text, className, id) {
        let el = document.createElement(element);

        if (text) {
            el.textContent = text;
        }

        if (className) {
            el.classList = className;
        }

        if (id) {
            el.id = id;
        }

        return el;
    }
}
