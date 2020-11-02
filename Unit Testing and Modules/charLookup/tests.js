const { assert } = require('chai');
const lookupChar = require('./charLookup.js');

describe('Testing <lookupChar>...', () => {

    describe('Tests =>', () => {

        it(`should return "undefined"`, () => {
            assert.equal(undefined, lookupChar('11'))
        });

        it(`should return "undefined"`, () => {
            assert.equal(undefined, lookupChar('11', '22'))
        });

        it(`should return "undefined"`, () => {
            assert.equal(undefined, lookupChar('Go away', 1.5));
        });

        it(`should return "undefined"`, () => {
            assert.equal(undefined, lookupChar(21, 1));
        });


        it(`should return "Incorrect index"`, () => {
            assert.equal('Incorrect index', lookupChar('Go', -1));
        });


        it(`should return "Incorrect index"`, () => {
            assert.equal('Incorrect index', lookupChar('Go', 2));
        });


        it(`should return "Incorrect index"`, () => {
            assert.equal('Incorrect index', lookupChar('Goaway', 6));
        });


        it(`should return "q"`, () => {
            assert.equal('q', lookupChar('abq', 2))
        });


        it(`should return "Incorrect index"`, () => {
            assert.equal('Incorrect index', lookupChar('Go', 22));
        });

        it(`should return "G"`, () => {
            assert.equal('G', lookupChar('Go', 0));
        });
    })
})
