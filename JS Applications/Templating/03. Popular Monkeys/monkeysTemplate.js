import monkeys from './monkeys.js';

const $domeElements = {
    monkeys: () => document.querySelector('.monkeys')
}

fetch('./monkey.hbs')
    .then((r) => r.text())
    .then(templateSrc => {
        const compile = Handlebars.compile(templateSrc);

        const result = compile({ monkeys });

        $domeElements.monkeys().innerHTML = result;
        showInfo();
    })
    .catch(console.error);

function showInfo() {
    $domeElements.monkeys().addEventListener('click', (e) => {
        const { target } = e;
        let parent = target.parentNode.querySelector('p');

        if (target.nodeName === 'BUTTON') {

            if (parent.style.display === 'none') {
                parent.style.display = 'block';
            } else {
                parent.style.display = 'none';
            }
        }
    })
}