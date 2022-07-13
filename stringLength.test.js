const stringLength = require('./stringLength')

test('Count', () => {
expect(stringLength('hola')).toBe(4)
});

test('Admitted Strings', () => {
    expect(stringLength('curriculums')).toBe('Not admitted string')
})