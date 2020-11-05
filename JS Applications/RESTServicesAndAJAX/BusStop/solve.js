/*
Write a JS program that displays arrival times for all buses by a given bus stop ID when a button is clicked. Use the skeleton from the provided resources.
When the button with ID 'submit' is clicked, the name of the bus stop appears and the list bellow gets filled with all the buses that are expected and their time of arrival.
Take the value of the input field with id 'stopId'. Submit a GET request to https://judgetests.firebaseio.com/businfo/{stopId}.json
(replace the highlighted part with the correct value) and parse the response. If an error occurs, the stop name changes to Error.

You will receive a JSON object in the format:
stopId: {
  name: stopName,
  buses: { busId: time, … }
}

Place the name property as text inside the div with ID 'stopName' and each bus as a list item with text:
"Bus {busId} arrives in {time}"
Replace all highlighted parts with the relevant value from the response.

The webhost will respond with valid data to IDs 1287, 1308, 1327 and 2334.

*/

function getInfo() {
    const $stopInput = document.querySelector("#stopId");
    const $stopDiv = document.querySelector("#stopName");
    const $busesLi = document.querySelector('#buses');
    const validIds = ['1287', '1308', '1327', '2334'];
    const url = `https://judgetests.firebaseio.com/businfo/${$stopInput.value}.json`;


    if (!validIds.includes($stopInput.value)) {
        $stopDiv.textContent = "Error";
        $stopInput.value = '';
        $busesLi.textContent = '';
        return;
    }


    fetch(url)
        .then(response => response.json())
        .then(data => {

            $busesLi.textContent = '';
            $stopDiv.textContent = data.name;

            Object.entries(data.busesLi).forEach(entry => {
                const $li = document.createElement('li');

                $li.textContent = `Bus ${entry[0]} arrives in ${entry[1]} minutes`;
                $busesLi.appendChild($li);
            });
        });
}
