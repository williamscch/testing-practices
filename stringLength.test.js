const stringLength = require('./stringLength')

test('Count', () => {
expect(stringLength('hello')).toBe(5)
});

test('Admitted Strings', () => {
    expect(stringLength('curriculums')).toBe('Not admitted string')
})