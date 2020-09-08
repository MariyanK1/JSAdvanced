let sum = require('./solve');
let assert = require('chai').assert;

describe('sum() behavior', () => {

    it('check the return result', () => {
        let actualResult = sum([10, 37]);
        let expectedResult = 47;

        assert.equal(actualResult, expectedResult, 'The result should be 47!')
    });
});
