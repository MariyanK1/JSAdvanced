const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer.js');

describe('Tests -> mathEnforcer', () => {
    describe('addFive', () => {
        it("should return undefined", () => {
            expect(mathEnforcer.addFive("x")).to.be.equal(undefined);
        })

        it(`should return "25"`, () => {
            expect(mathEnforcer.addFive(20)).to.be.equal(25);
        })

        it(`should return "9"`, () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        })

        it(`should return "6.5"`, () => {
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.01);
        })
    })

    describe('subtractTen', () => {
        it(`should return "undefined"`, () => {
            expect(mathEnforcer.subtractTen('x')).to.be.equal(undefined);
        })

        it(`should return "0"`, () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        })

        it(`should return "-20"`, () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        })

        it(`should return "undefined"`, () => {
            expect(mathEnforcer.subtractTen(20.5)).to.be.closeTo(10.5, 0.01);
        })
    })

    describe('sum', () => {
        it(`should return "undefined"`, () => {
            expect(mathEnforcer.sum('x', 10)).to.be.equal(undefined);
        })

        it(`should return "undefined"`, () => {
            expect(mathEnforcer.sum(10, 'x')).to.be.equal(undefined);
        })

        it(`should return "20"`, () => {
            expect(mathEnforcer.sum(10, 10)).to.be.equal(20);
        })

        it(`should return "9"`, () => {
            expect(mathEnforcer.sum(10, -1)).to.be.equal(9);
        })

        it(`should return "-30"`, () => {
            expect(mathEnforcer.sum(-10, -20)).to.be.equal(-30);
        })

        it(`should return "11.5"`, () => {
            expect(mathEnforcer.sum(10.5, 1.4)).to.be.closeTo(11.9, 0.01);
        })
    })
})
