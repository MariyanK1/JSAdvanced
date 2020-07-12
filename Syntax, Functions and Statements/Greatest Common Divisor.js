function GCD(num1, num2) {

    let oldDivisor = 1;
    let newDivisor = 1;
    let smallest = Math.min(num1, num2);

    for (let i = oldDivisor; i <= smallest; i++) {

        if (num1 % i === 0 && num2 % i === 0) {
            newDivisor = i;
        }

        if (newDivisor > oldDivisor) {
            oldDivisor = newDivisor;
        }
    }

    console.log(oldDivisor);
}

GCD(15, 5)
