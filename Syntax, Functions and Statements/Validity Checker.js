/*

Write a program that receives two points in the format [x1, y1, x2, y2].
Check if the distance between each point and the start of the cartesian coordinate system (0, 0) is valid.
A distance between two points is considered valid, if it is an integer value. 

In case a distance is valid, print"{x1, y1} to {x2, y2} is valid"
If the distance is invalid, print "{x1, y1} to {x2, y2} is invalid"
The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
The input consists of two points given as an array of numbers.
For each comparison print either "{x1, y1} to {x2, y2} is valid" if the distance is valid, or "{x1, y1} to {x2, y2} is invalid" if it is invalid.

*/

function solve(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH**2 + distY**2);
    }

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
