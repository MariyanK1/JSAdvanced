/*
Write a function that highlights the currently active section of a document.
There will be multiple divs with input fields inside them. Set the class of the div that contains the currently focused input field to "focus".
When focus is lost (blurred), remove the class from the element.
Submit only the focus() function in judge.

Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.


*/


function focus() {
    const changeFocus = (e) => {
        const parent = e.target.parentNode;
        parent.className = parent.className ? "" : "focused";
    }

    for (el of document.getElementsByTagName('input')) {
        const input = el;
        
        input.addEventListener("focus", changeFocus);
        input.addEventListener("blur", changeFocus);
    }
}
