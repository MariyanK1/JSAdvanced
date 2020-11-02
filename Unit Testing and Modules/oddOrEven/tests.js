let { assert } = require('chai');
let isOddOrEven = require('./evenOrOdd.js');

describe("Test isOddOrEven", () => {
    describe("General tests", () => {
        it("should be a function", () => {
            assert.equal('function', typeof (isOddOrEven));
        });

        it("should return string", () => {
            assert.equal('string', typeof isOddOrEven('21'));
        });
    });

    describe("Values tests", () => {
        it("should return undefined when called with a number as parameter", () => {
            assert.equal(undefined, isOddOrEven(10));
        });

        it("should return undefined when called with an array as parameter", () => {
            assert.equal(undefined, isOddOrEven(['even?']));
        });

        it("should return undefined when called with an object as parameter", () => {
            assert.equal(undefined, isOddOrEven({ string: 'string' }));
        });

        it("should return 'even' when string length is an even number", () => {
            assert.equal('even', isOddOrEven('ye'));
        });

        it("should return 'odd' when string length is an odd number", () => {
            assert.equal('odd', isOddOrEven('n'));
        });

        it("should work correctly with longer strings", () => {
            assert.equal('even', isOddOrEven('Yes I\'m an even string!!'));
        });

        it("should work correctly with longer strings", () => {
            assert.equal('odd', isOddOrEven('No I\'m not an even string! I\'m so odd!!'));
        });
    });
});
