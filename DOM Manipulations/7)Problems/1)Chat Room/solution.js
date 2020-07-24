/*
Write a function to create the functionality of a chat room.
Note: Do not forget to add event listener to the send button!
The new div element with class message my-message should contain the current message that is about to be
send.
The current div should be appended to the div with an "chat_messages".
The input should be cleared on each click of the send button.
*/

function solve() {
   let sendButton = document.getElementById('send');
   let input = document.getElementById('chat_input');
   let messageField = document.getElementById('chat_messages')

   sendButton.addEventListener('click', (e) => {
      let newEl = document.createElement('div');
      newEl.innerHTML = input.value;
      newEl.classList.add('message', 'my-message');
      messageField.appendChild(newEl);
      input.value = '';
   });
}
