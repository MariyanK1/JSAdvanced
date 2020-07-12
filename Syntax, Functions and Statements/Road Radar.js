/*
Write a function that determines whether a driver is within the speed limit.

You will receive the speed and the area. Each area has a different limit:
* On the motorway the limit is 130 km/h
* On the interstate the limit is 90 km/h
* In the city the limit is 50 km/h
* Within a residential area the limit is 20 km/h

If the driver is within the limits, there should not be any output.
If the driver is over the limit, however, your function should print the severity of the infraction.

For speeding up to 20 km/h over the limit, speeding should be printed
For speeding up to 40 km/h over the limit, excessive speeding should be printed
For anything else, reckless driving should be printed

The input comes as an array of elements. The first element is the current speed (number), the second
element is the area.
The output should be printed on the console. Note that in certain cases there isn’t any output.

*/

function roadRadar(input = []) {
    let speed = input[0];
    let result = '';
    switch (input[1]) {
        case 'interstate':
            if (speed <= 90) {
                return;
            }
            else if (speed > 90 && speed <= 110) {
                result = 'speeding';
            } else if (speed > 110 && speed <= 150) {
                result = 'excessive speeding';
            } else {
                result = 'reckless driving'
            }
            break;

        case 'motorway':
            if (speed <= 130) {
                return;
            } else if (speed > 130 && speed <= 150) {
                result = 'speeding';
            }
            else if (speed > 150 && speed <= 170) {
                result = 'excessive speeding';
            }
            else {
                result = 'reckless driving'
            }
            break;

        case 'city':
            if (speed <= 50) {
                return;
            } else if (speed > 50 && speed <= 70) {
                result = 'speeding';
            } else if (speed > 70 && speed <= 90) {
                result = 'excessive speeding';
            } else {
                result = 'reckless driving'
            }
            break;

        default:
            if (speed <= 20) {
                return;
            } else if (speed > 20 && speed <= 40) {
                result = 'speeding';
            } else if (speed > 40 && speed <= 60) {
                result = 'excessive speeding';
            } else {
                result = 'reckless driving'
            }
            break;
    }

    console.log(result);
}



roadRadar([120, 'interstate'])
