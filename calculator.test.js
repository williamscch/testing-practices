const calculator = require('./calculator');

describe('Add', () => {
    test('Small Sum', () => {
        expect(calculator.add(2, 2)).toBe(4);
    })
    test('Big Sum', () => {
        expect(calculator.add(50000, 50000)).toBe(100000);
    })
    test('Decimal Sum', () => {
        expect(calculator.add(5.15, 2.50)).toBe(7.65);
    })
})

describe('Subtract', () => {
    test('Integer Subtract', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    })
    test('Decimal Subtract', () => {
        expect(calculator.subtract(85.369, 52.694)).toBe(32.675);
    })
    test('Subtracting Fractions', () => {
        expect(calculator.subtract(5/2, 3/5)).toBe(1.9);
    })
})

describe('Divide', () => {
    test('Integer Division', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    })
    test('Decimal Division', () => {
        expect(calculator.divide(5.5, 3.2)).toBe(1.71875);
    })
    test('Fractional Division', () => {
        expect(calculator.divide(5/2, 8/2)).toBe(0.625);
    })
})

describe('Multiply', () => {
    test('Small Multiplication', () => {
        expect(calculator.multiply(10, 2)).toBe(20);
    })
    test('Big Multiplication', () => {
        expect(calculator.multiply(750, 450)).toBe(337500);
    })
    test('Negative Multiplication', () => {
        expect(calculator.multiply(-8, -7)).toBe(56);
    })
})
