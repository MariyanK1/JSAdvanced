/*
⦁	Each catch should have:
⦁	angler - string representing the name of the person who caught the fish
⦁	weight - floating-point number representing the weight of the fish in kilograms
⦁	species - string representing the name of the fish species
⦁	location - string representing the location where the fish was caught
⦁	bait - string representing the bait used to catch the fish
⦁	captureTime - integer number representing the time needed to catch the fish in minutes


HTML Template
Use the skeleton from the provided resources.
Attach handlers to the [Load], [Update], [Delete] and [Add] buttons, which make the appropriate GET, PUT, DELETE and POST requests. 

You are given an example catch in the template to show you where and how to insert the catches.

Create the following REST services to access your data:
⦁	List All Catches
⦁	Endpoint - https://fisher-game.firebaseio.com/catches.json
⦁	Method: GET
⦁	Returns (Object of objects)
⦁	Create a New Catch
⦁	Endpoint: https://fisher-game.firebaseio.com/catches.json
⦁	Method: POST
⦁	Request body (JSON): {"angler":"…", "weight":…, "species":"…", "location":"…", "bait":"…", "captureTime":…}
⦁	Update a Catch
⦁	Endpoint: https://fisher-game.firebaseio.com/catches/{catchId}.json
⦁	Method: PUT
⦁	Request body (JSON): {"angler":"…", "weight":…, "species":"…", "location":"…", "bait":"…", "captureTime":…}
⦁	Delete a Catch
⦁	Endpoint: https://fisher-game.firebaseio.com/catches/{catchId}.json
⦁	Method: DELETE


⦁	Pressing the [Load] button should list all catches. 
⦁	Pressing the [Update] button should send a PUT request, updating the catch in firebase. 
⦁	Pressing the [Delete] button should delete the catch both from firebase and from the page. 
⦁	Pressing the [Add] button should submit a new catch with the values of the inputs in the fieldset with id="addFrom".


*/

function attachEvents() {
    const $buttonAdd = document.querySelector('button.add');
    const $buttonLoad = document.querySelector('button.load');
    const $catchesDiv = document.querySelector('#catches');

    $buttonAdd.addEventListener('click', () => {

        const $anglerInput = document.querySelector('#addForm > input.angler');
        const $weightInput = document.querySelector('#addForm > input.weight');
        const $speciesInput = document.querySelector('#addForm > input.species');
        const $locationInput = document.querySelector('#addForm > input.location');
        const $baitInput = document.querySelector('#addForm > input.bait');
        const $captureTimeInput = document.querySelector('#addForm > input.captureTime');

        const values = JSON.stringify({
            angler: $anglerInput.value,
            weight: $weightInput.value,
            species: $speciesInput.value,
            location: $locationInput.value,
            bait: $baitInput.value,
            captureTime: $captureTimeInput.value
        });

        fetch('https://fisher-game.firebaseio.com/catches.json', {
            method: 'POST',
            body: values
        })
    })


    $buttonLoad.addEventListener('click', () => {

        fetch('https://fisher-game.firebaseio.com/catches.json')
            .then(x => x.json())
            .then(data => {
                Object
                    .keys(data)
                    .forEach(id => {
                        const { angler, weight, species, location, bait, captureTime } = data[id];

                        const $divCatch = createEl('div', 'catch');
                        const $deleteButton = createEl('button', 'delete', 'Delete');
                        const $updateButton = createEl('button', 'update', 'Update');


                        const $anglerLabel = createEl('label', null, 'Angler');
                        const $anglerInputElement = createEl('input', 'angler', null, angler, 'text');

                        const $weightLabel = createEl('label', null, 'Weight');
                        const $weightInputElement = createEl('input', 'weight', null, weight, 'number');

                        const $speciesLabel = createEl('label', null, 'Species');
                        const $speciesInputElement = createEl('input', 'species', null, species, 'text');

                        const $locationLabel = createEl('label', null, 'Location');
                        const $locationInputElement = createEl('input', 'location', null, location, 'text');

                        const $baitLabel = createEl('label', null, 'Bait');
                        const $baitInputElement = createEl('input', 'bait', null, bait, 'text');

                        const $captureTimeLabel = createEl('label', null, 'Capture Time');
                        const $captureTimeInputElement = createEl('input', 'captureTime', null, captureTime, 'number');

                        $divCatch.appendChild($anglerLabel);
                        $divCatch.appendChild($anglerInputElement);
                        $divCatch.appendChild(document.createElement('hr'));
                        $divCatch.appendChild($weightLabel);
                        $divCatch.appendChild($weightInputElement);
                        $divCatch.appendChild(document.createElement('hr'));
                        $divCatch.appendChild($speciesLabel);
                        $divCatch.appendChild($speciesInputElement);
                        $divCatch.appendChild(document.createElement('hr'));
                        $divCatch.appendChild($locationLabel);
                        $divCatch.appendChild($locationInputElement);
                        $divCatch.appendChild(document.createElement('hr'));
                        $divCatch.appendChild($baitLabel);
                        $divCatch.appendChild($baitInputElement);
                        $divCatch.appendChild(document.createElement('hr'));
                        $divCatch.appendChild($captureTimeLabel);
                        $divCatch.appendChild($captureTimeInputElement);
                        $divCatch.appendChild(document.createElement('hr'));
                        $divCatch.appendChild($updateButton);
                        $divCatch.appendChild($deleteButton);


                        $catchesDiv.appendChild($divCatch);

                        $deleteButton.addEventListener('click', () => {
                            const url = `https://fisher-game.firebaseio.com/catches/${id}.json`;

                            fetch(url, { method: 'DELETE' }).catch(e => alert(e))
                        })

                        $updateButton.addEventListener('click', () => {
                            const values = JSON.stringify({
                                angler: $anglerInputElement.value,
                                weight: $weightInputElement.value,
                                species: $speciesInputElement.value,
                                location: $locationInputElement.value,
                                bait: $baitInputElement.value,
                                captureTime: $captureTimeInputElement.value
                            });

                            const url = `https://fisher-game.firebaseio.com/catches/${id}.json`;

                            fetch(url, { method: "PUT", body: values });
                        })
                    })
            })
            .catch(e => alert(e));
    })

    function createEl(el, className, textContent, value, type) {
        const e = document.createElement(el);

        if (className) {
            e.className = className;
        }

        if (textContent) {
            e.textContent = textContent;
        }

        if (value) {
            e.value = value;
        }

        if (type) {
            e.type = type;
        }

        return e;
    }
}
attachEvents();
