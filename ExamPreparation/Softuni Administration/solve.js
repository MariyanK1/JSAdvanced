/*
Problem 01. SoftUni Administration
Exam problems for the “JavaScript Advanced” course @ SoftUni. Submit your solutions in the SoftUni Judge system at https://judge.softuni.bg/Contests/Compete/Index/2590#0
Use the given skeleton to solve this problem.
Note: USE THE GOOGLE CHROME BROWSER!
Note: You have NO permission to change directly the given HTML (index.html file).

Your Task
Write the missing JavaScript code to make the SoftUni Administration Functionality works as follows: 

The Module field is a dropdown menu.


When the Add button is clicked, first you need to validate the inputs. If any of the input fields is invalid (empty or default value), the function doesn’t make anything.
Be careful with the validation of the Module dropdown (it's default value is NOT an empty string). 
After validating the input fields, you need to add the new lecture in the Trainings section. 

The added lecture should have button with text "Del".  The date and the lecture name must be formatted as shown on the screenshots.
Be careful with the HTML-Structure and with the class names!
Duplicated names of the lectures are allowed.


If there is another Lecture with the same Module:
The lectures should be sorted by DATE! The date is separated with slashes (/) and the separator between the date and time is a minus sign.
Hint: The format of the date allows alphabetical sort.


Deleting Lecture/Module:


When the “Delete” button is clicked, the Lecture (whole list element) should be removed from the HTML. 


If there are NO Lectures left in the module (after delete) the whole module should be also deleted.



GOOD LUCK!

*/

function solve() {
    const $lectureInput = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(1) > input[type=text]');
    const $dateInput = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(2) > input[type=datetime-local]');
    const $moduleInput = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(3) > select');
    const $addButton = document.querySelector('body > main > section.admin-view.section-view > div > div > form > div:nth-child(4) > button');
    const $moduleDiv = document.querySelector('body > main > section.user-view.section-view > div'); //append the result here


    $addButton.addEventListener('click', e => {
        e.preventDefault();

        if ($moduleInput.value === 'Select module' || !$dateInput.value || !$lectureInput.value) {
            return;
        };

        let date = $dateInput.value;

        date = date.replace('-', '/');
        date = date.replace('T', ' - ');
        date = date.replace('-', '/');

        const $delButton = document.createElement('button');
        $delButton.textContent = 'Del';
        $delButton.className = 'red';

        const $h3 = document.createElement('h3');
        $h3.textContent = `${$moduleInput.value.toUpperCase()}-MODULE`;


        const $divResult = document.createElement('div'); //append h3 here
        $divResult.className = 'module';

        const $ul = document.createElement('ul');

        const $li = document.createElement('li'); //append h4 here
        $li.className = 'flex';

        const $h4 = document.createElement('h4');
        $h4.textContent = `${$lectureInput.value} - ${date}`;


        let x = Array.from(document.querySelectorAll('h3'));

        if (x.find(e => e.textContent == $h3.textContent)) {
            let node = x.find(e => e.textContent == $h3.textContent)
            let prnt = node.parentElement.querySelector('ul');
            prnt.appendChild($li);
            $li.appendChild($h4);
            $li.appendChild($delButton);

        } else {
            $li.appendChild($h4);
            $li.appendChild($delButton);

            $ul.appendChild($li)

            $divResult.appendChild($h3);
            $divResult.appendChild($ul);

            $moduleDiv.appendChild($divResult);
        }

        $delButton.addEventListener('click', (e) => {
            let lis = Array.from(document.getElementsByTagName('li'))

            if (lis.length === 1) {
                e.target.parentElement.parentElement.parentElement.remove();
            } else {
                $li.remove();
            }
        })
    })


}
