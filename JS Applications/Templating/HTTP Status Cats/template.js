const $domeElements = {
    allCats: () => document.querySelector('#allCats')
}

Promise.all([
    getTemplate('./templateRender.hbs'),
    getTemplate('./cat.hbs')
])
    .then(([tempSource, catSrc]) => {
        Handlebars.registerPartial('cat', catSrc);

        let template = Handlebars.compile(tempSource);
        let result = template({ cats });
        $domeElements.allCats().innerHTML = result;
        showInfo();
    })
    .catch(console.error)

function showInfo() {
    $domeElements.allCats().addEventListener('click', (e) => {
        const { target } = e;

        if (target.nodeName === 'BUTTON') {
            let status = target.parentNode.querySelector('div.status');

            if (status.style.display === 'none') {
                target.textContent = 'Hide Status Code';
                status.style.display = 'block';
            } else {
                target.textContent = 'Show Status Code';
                status.style.display = 'none';
            }
        }
    })
}

function getTemplate(templateLocation) {
    return fetch(templateLocation).then(r => r.text());
}


