function squareOfStars(input) {
    let res = '';

    for (let i = 1; i <= input; i++) {
        res += '*' + ' '
    }

    for (let i = 1; i <= input; i++) {
        res = res
        console.log(res);
    }
}
