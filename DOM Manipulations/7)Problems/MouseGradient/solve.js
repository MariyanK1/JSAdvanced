/*
Write a program that detects and displays how far along a gradient the user has moved their mouse.
The result should be rounded down and displayed as a percentage inside the <div> with ID "result". 
Submit only the attachGradientEvents() function in judge. 

Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
*/

function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener("mousemove", (e) => {
        let mouseX = e.offsetX;
        let width = e.target.clientWidth;
        console.log(width);
        let percent = (100 / width) * mouseX;
        result.textContent = `${Math.trunc(percent)}%`;

    });

    document.getElementById("gradient-box")
        .addEventListener("mouseout", () => {
            result.textContent = "";
        });
}
