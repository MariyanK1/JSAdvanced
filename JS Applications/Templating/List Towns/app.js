const urlCountries = 'https://restcountries.eu/rest/v2/all';
const urlQuotes = 'https://api.kanye.rest';

const $domeElements = {
    input: () => document.querySelector('#towns'),
    loadBtn: () => document.querySelector('#btnLoadTowns'),
    root: () => document.querySelector('#root'),
    load250: () => document.querySelector('#btnLoad250'),
    loadKanye: () => document.querySelector('#btnLoadQuote'),
    ul: () => document.querySelector('#root > ul')

}

$domeElements.loadBtn().addEventListener('click', loadTowns);
$domeElements.load250().addEventListener('click', load250);
$domeElements.loadKanye().addEventListener('click', loadWest);

function loadWest(e) {
    e.preventDefault();

    fetch(urlQuotes)
        .then(r => r.json())
        .then(({ quote }) => {
            $domeElements.ul().innerHTML = `<lu><li>${quote}</li></lu>`;
        })
        .catch(e => console.error(e));
}

function load250(e) {
    e.preventDefault();
    fetch(urlCountries)
        .then(r => r.json())
        .then(appendCities)
        .catch(e => aconsole.error(e));
}

function loadTowns(e) {
    e.preventDefault();

    const { value } = $domeElements.input();
    const towns = value.split(', ').map((t) => { return { name: t } });

    appendCities(towns);
}

function appendCities(towns) {
    getTemplate()
        .then(tempSource => {
            const template = Handlebars.compile(tempSource);

            const html = template({ towns });

            $domeElements.root().innerHTML = html;
        });
}

function getTemplate() {
    return fetch('./template.hbs').then((r) => r.text());
}
