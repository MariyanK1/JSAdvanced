function attachEvents() {
    const $button = document.querySelector('#submit');
    const $inputValue = document.querySelector('#location');
    const $currentDiv = document.querySelector('#current');
    const $forecastDiv = document.querySelector('#forecast');
    const $upcomingDiv = document.querySelector('#upcoming');
    const locationsURL = 'https://judgetests.firebaseio.com/locations.json';
    const validCities = ["London", "New York", "Barcelona"];
    const symbols = {
        Sunny: "&#x2600",
        "Partly sunny": "&#x26C5",
        Overcast: "&#x2601",
        Rain: "&#x2614",
        Degrees: "&#176"
    };

    $button.addEventListener('click', (e) => {
        if (!validCities.includes($inputValue.value)) {
            $forecastDiv.style.display = 'block';
            document.querySelector('#current > div').textContent = 'Error';

            if (document.querySelector('#upcoming > div')) {
                document.querySelector('#upcoming > div').remove();
            }
            return;
        }

        getWeather();
    })


    function getWeather() {
        fetch(locationsURL)
            .then(x => x.json())
            .then(data => {
                const city = data.find(x => { return x.name === $inputValue.value });
                const forecastToday = `https://judgetests.firebaseio.com/forecast/today/${city.code}.json`;
                const forecastFor3days = `https://judgetests.firebaseio.com/forecast/upcoming/${city.code}.json`;

                const today = fetch(forecastToday).then(x => x.json());
                const threeDays = fetch(forecastFor3days).then(x => x.json());

                Promise.all([today, threeDays])
                    .then(([today, threeDays]) => {
                        const todayForecast = today.forecast;
                        const threeDaysForecast = threeDays.forecast;

                        const $forecastInfoDiv = createEl('div', 'forecast-info');
                        const $spanSymbol = createEl('span', 'condition symbol', symbols[todayForecast.condition]);
                        const $spanCondition = createEl('span', 'condition');
                        const $spanCityData = createEl('span', 'forecast-data', '', today.name);
                        const $spanDegreesData = createEl('span', 'forecast-data', `${todayForecast.low}${symbols.Degrees}/${todayForecast.high}${symbols.Degrees}`);
                        const $spanConditionName = createEl('span', 'forecast-data', `${todayForecast.condition}`);

                        $spanCondition.appendChild($spanCityData);
                        $spanCondition.appendChild($spanDegreesData);
                        $spanCondition.appendChild($spanConditionName);

                        $currentDiv.appendChild($spanSymbol);
                        $currentDiv.appendChild($spanCondition);

                        threeDaysForecast.forEach(entry => {

                            const condition = entry.condition;
                            const low = entry.low;
                            const high = entry.high;
                            const $spanUpcoming = createEl('span', 'upcoming');
                            const $symbol = createEl('span', 'symbol', symbols[condition]);
                            const $degrees = createEl('span', 'forecast-data', `${low}${symbols.Degrees}/${high}${symbols.Degrees}`);
                            const $condition = createEl('span', 'forecast-data', condition);

                            $spanUpcoming.appendChild($symbol);
                            $spanUpcoming.appendChild($degrees);
                            $spanUpcoming.appendChild($condition);

                            $forecastInfoDiv.appendChild($spanUpcoming);
                        });

                        $upcomingDiv.appendChild($forecastInfoDiv);
                        $forecastDiv.style.display = 'block';
                        $inputValue.value = '';
                    })
                    .catch(e => alert(e))

            });
    }

    function createEl(el, className, innerHTML, textContent) {
        const e = document.createElement(el);

        if (className) {
            e.className = className;
        }

        if (innerHTML) {
            e.innerHTML = innerHTML;
        }

        if (textContent) {
            e.textContent = textContent;
        }

        return e;
    }
}

attachEvents();
