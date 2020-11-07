/*
Write a JS program that can load, create and delete entries from a Phonebook.
You will be given an HTML template to which you must bind the needed functionality. 

Use the skeleton from the provided resources.

When the [Load] button is clicked, a GET request should be made to the server to get all phonebook entries.
\Each received entry should be in a li inside the ul with id="phonebook" in the following format with text "<person>: <phone> " and a [Delete] button attached.

Pressing the [Delete] button should send a DELETE request to the server and delete the entry.

The received response will be an object in the following format:
{<key>:{person:<person>, phone:<phone>}, <key2>:{person:<person2>, phone:<phone2>,…} where <key> is an unique key given by the server and <person> and <phone> are the actual values.

When the [Create] button is clicked, a new POST request should be made to the server with the information from the Person and Phone textboxes, 
the Person and Phone textboxes should be cleared and the Phonebook should be automatically reloaded (like if the [Load] button was pressed).

The data sent on a POST request should be a valid JSON object, containing properties person and phone. Example format: 
{
"person": "<person>",
"phone": "<phone>"
}
T
he url to which your program should make requests is:
'https://phonebook-nakov.firebaseio.com/phonebook'

GET and POST requests should go to https://phonebook-nakov.firebaseio.com/phonebook.json,
while DELETE requests should go to https://phonebook-nakov.firebaseio.com/phonebook/<key>.json , where <key> is the unique key of the entry
(you can find out the key from the key property in the GET request)

*/


function attachEvents() {
    const $loadButton = document.querySelector('#btnLoad');
    const $ul = document.querySelector('#phonebook');
    const $createButton = document.querySelector('#btnCreate');
    const $personInput = document.querySelector('#person');
    const $phoneInput = document.querySelector('#phone');
    const getRequests = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

    $createButton.addEventListener('click', () => {
        POST(getRequests);
    })

    $loadButton.addEventListener('click', () => {
        GET(getRequests);
    });


    function GET(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                Object.entries(data).forEach(entry => {
                    const $li = document.createElement('li');
                    const $deleteButton = document.createElement('button');
                    const deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${entry[0]}.json`;

                    $li.textContent = `${entry[1].person} ${entry[1].phone}`;
                    $deleteButton.textContent = 'Delete';

                    $deleteButton.addEventListener('click', () => {
                        fetch(deleteUrl, { method: "DELETE" });
                    });

                    $li.appendChild($deleteButton);

                    $ul.appendChild($li);
                })
            })
    }

    function POST(url) {
        fetch(url, { method: "POST", body: JSON.stringify({ "person": `${$personInput.value}`, "phone": `${$phoneInput.value}` }) });
    }
}

attachEvents();
