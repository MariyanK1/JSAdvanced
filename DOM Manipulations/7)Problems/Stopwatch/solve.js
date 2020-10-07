/*
Write a timer that counts minutes and seconds. The user should be able to control it with buttons.
Clicking [Start] starts the counter. Clicking [Stop] resets the timer back to zero.
Only one of the buttons should be enabled at a time (you cannot stop the timer, if it is not running). 
Submit only the stopwatch() function in judge.

Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.

*/

function stopwatch() {
    let buttons = document.querySelectorAll('button');
    const timer = document.getElementById('time');
    let counter = 0;
    let startTimer;

    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.id === 'startBtn') {
                timer.textContent = "00:00";
                startTimer = setInterval(() => {
                    counter += 1;
                    const seconds = counter % 60;
                    const minutes = Math.floor(counter / 60);
                    timer.textContent = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
                }, 1000);

                document.getElementById('startBtn').disabled = true;
                document.getElementById('stopBtn').disabled = false;
            } else {
                clearInterval(startTimer);
                counter = 0;
                document.getElementById('startBtn').disabled = false;
                document.getElementById('stopBtn').disabled = true;
            }
        })
    })
}
