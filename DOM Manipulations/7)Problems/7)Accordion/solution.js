/*
An html file is given and your task is to show more/less information by clicking a [ADD] button (it is not an
actual button, but a span that has an onclick event attached to it).
When [More] button is clicked, it reveals the content of a hidden div and changes the text of the button to [Less].
When the same link is clicked again (now reading Less), hide the div and change the text of the link to More.
Link action should be toggleable (you should be able to click the button infinite amount of times).
*/


function toggle() {
    const $divs = document.querySelectorAll("div > div");
    const $button = $divs[0].querySelector('span.button');

    if ($button.textContent === 'More') {
        $button.textContent = 'Less';
        $divs[1].style.display = "block";
    } else {
        $button.textContent = 'More';
        $divs[1].style.display = "none";
    }
}
