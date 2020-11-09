/*
Write a JS program that records and displays messages. The user can post a message, supplying a name and content and retrieve all currently recorded messages.
Use the skeleton from the provided resources
Firebase url for the requests - https://rest-messanger.firebaseio.com/messanger
When [Send] button is clicked you should create a new object and send a post request to the firebase url. Use the following message structure:
{
  author: authorName,
  content: msgText,
}
The key associated with each message object is not important - when making a POST request with the message object as parameter,
Firebase will automatically assign a random key.

If you click over [Refresh] button you should get all messages with GET request and display them into the textarea.

Use the following message format:
"{author}: {message}"

*/

function attachEvents() {
    const $refreshButton = document.querySelector('#refresh');
    const $sendButton = document.querySelector('#submit');
    const $messages = document.querySelector('#messages');
    const $nameInput = document.querySelector('#author');
    const $messageInput = document.querySelector('#content');
    const url = 'https://rest-messanger.firebaseio.com/messanger.json';


    $refreshButton.addEventListener('click', GET(url));

    $sendButton.addEventListener('click', POST(url));


    function POST(url) {
        fetch(url, {
            method: "POST", body: JSON.stringify({ "author": $nameInput.value, "content": $messageInput.value })
        });
    }

    function GET(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let result = '';

                Object.entries(data)
                    .forEach(entry => {
                        result += `${entry[1].author}: ${entry[1].content}\n`;
                    })

                $messages.textContent = result;
            });
    }
}

attachEvents();
