function lookupChar(string, index) {

    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

lookupChar('Goaway', 5)

module.exports = lookupChar;
