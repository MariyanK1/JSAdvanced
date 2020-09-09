let isSymmetric = require('./solve');
let assert = require('chai').assert;

describe('isSymmetric() behavior', () => {

    it('The argument is an Array?', () => {
        let actualResult = isSymmetric([]);
        let expectedResult = true;

        assert.equal(actualResult, expectedResult, 'The argument should be an Array!');
    });

    it('Is the Array Symmetric?', () => {
        let actualResult = isSymmetric([1, 2, 3, 3, 2, 1]);
        let expectedResult = true;

        assert.equal(actualResult, expectedResult, 'The Array is not symmetric!')
    });

});
