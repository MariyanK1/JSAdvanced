const { expect, assert } = require('chai');
const stringBuilder = require('./stringBuilder.js');

describe('Tests -> stringBuilder', () => {
    let sB;

    beforeEach(() => {
        sB = new stringBuilder();
    })

    describe('validate parameter', () => {
        it('should throw exception when parameter is not string', () => {
            assert.throw(() => {
                new stringBuilder(null);
            }, 'Argument must be string')
        })
    })

    describe('constructor', () => {
        it('should work if the parameter is falsy', () => {
            assert.equal('', sB.toString());
        })
        it('should work if parameter is a string', () => {
            sB = new stringBuilder('Walking');
            assert.equal('Walking', sB.toString());
        })
    })

    describe('append', () => {
        it('should append string to the end of the storage', () => {
            sB.append('Walking');
            assert.equal('Walking', sB.toString());
        })
    })

    describe('prepend', () => {
        it('should append string to the beginning of the storage', () => {
            sB.append('alking');
            sB.prepend('W', 0);
            assert.equal('Walking', sB.toString());
        })
    })


    describe('insertAt', () => {
        it('should insert string to the given index of the storage', () => {
            sB.append('Wlking');
            sB.insertAt('a', 1);
            assert.equal('Walking', sB.toString());
        })
    })

    describe('remove', () => {
        it('should remove text from the given index to the given length(inclusive)', () => {
            sB.append('Walking');
            sB.remove(0, 1);
            assert.equal('alking', sB.toString());
        })
    })
})
