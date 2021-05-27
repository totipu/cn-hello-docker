const expect = require('chai').expect;
// import math file
const math = require('../math');
describe('math.js tests', () => {
    describe('math.add() Test', () => {
        it('should equal 2', () => {
            const result = math.add(1, 1);
            expect(result).to.equal(2);
        });
        it('should equal 4', () => {
            const result = math.add(2, 2);
            expect(result).to.equal(4);
        });
    });
    
    describe('math.multiply() Test', () => {
        it('should equal 3', () => {
            const result = math.multiply(3, 1);
            expect(result).to.equal(3);
        });
        it('should equal 10', () => {
            const result = math.multiply(5, 2);
            expect(result).to.equal(10);
        });
    });
});