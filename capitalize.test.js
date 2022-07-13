const capitalize = require('./capitalize');

test('Capitalize first character', () => {
    expect(capitalize('snow')).toBe('Snow')
})