/*
Write the missing JavaScript code to make the Central Cinema application work as expected.  
Each movie have Name, Hall and Ticket Price. 
When you click the [On Screen] button and only if inputs are all filled and the ticket price value is a number,
then a new list item should be added to the Movies on Screen section. Clear the inputs.

You should create a li element that contains span element with the name of the movie, a strong element with the name of the hall like “Hall: { hallName }“ and a div element. Inside the div element, there are a strong element with the ticket price, input element with placeholder containing “Tickets Sold” and a button [Archive].
When you click the [Archive] button and only if the input for tickets count is filled with a number like:

You should add that item to Archive section like a list item in the ul, calculating the total profit of the movie like this:


Here we have list item containing span element with the name of the movie, strong element with total profit like 
“Total amount: {total price}” fixed to the second digit after the decimal point. Add a delete button [Delete].
When you click the [Delete] button, you should delete the current list item.


*/

function solve() {

    const $inputFields = document.getElementById('container');
    const $formButton = document.querySelector('#add-new div button')
    let [name, hall, ticketPrice] = Array.from($inputFields.children);


    $formButton.addEventListener('click', e => {
        e.preventDefault();

        if (!name.value || !hall.value || !Number(ticketPrice.value)) {
            return;
        }

        let $moviesUl = document.querySelector('#movies ul');
        let $liEl = document.createElement('li');
        let $span = document.createElement('span');
        let $div = document.createElement('div');
        let $input = document.createElement('input');
        let $archiveButton = document.createElement('button');

        $span.textContent = name.value;
        $liEl.appendChild($span);
        $liEl.innerHTML += `<strong>Hall: ${hall.value}</strong>`;

        $div.innerHTML += `<strong>${Number(ticketPrice.value).toFixed(2)}</strong>`;
        $input.placeholder = "Tickets Sold";

        $archiveButton.textContent = 'Archive';

        $div.appendChild($input);
        $div.appendChild($archiveButton);

        $liEl.appendChild($div);
        $moviesUl.appendChild($liEl);

        name.value = '';
        hall.value = '';
        ticketPrice.value = '';

        $archiveButton.addEventListener('click', e => {

            if (!Number($input.value)) {
                return;
            }

            let $archiveSection = document.querySelector('#archive ul');
            let $clearButton = document.querySelector('#archive button');
            let $archiveLi = document.createElement('li');
            let $archiveSpan = document.createElement('span');
            let $deleteButton = document.createElement('button');
            let $finalTicketPrice = document.querySelector('#movies ul li div strong');
            let $finalName = document.querySelector('#movies ul li span')
            let totalSum = Number($input.value) * Number($finalTicketPrice.textContent);

            $deleteButton.textContent = 'Delete';

            $archiveSpan.textContent = $finalName.textContent;
            $archiveLi.appendChild($archiveSpan);
            $archiveLi.innerHTML += `<strong>Total amount: ${totalSum.toFixed(2)}</strong>`;
            $archiveLi.appendChild($deleteButton);

            $archiveSection.appendChild($archiveLi);
            e.target.parentElement.parentElement.remove();

            $deleteButton.addEventListener('click', e => {
                e.target.parentElement.remove();
            });

        })
    })
}
