const fizzbuzz = require('./fizzbuzz');

describe('Testing fizzbuzz logic', () => {

    it('should be a function', () => {
        expect(typeof fizzbuzz).toBe('function');
    });

    it('shoud return the number if not multiple of 3 nor of 5', () => {
        expect(fizzbuzz(1)).toBe(1);
        expect(fizzbuzz(13)).toBe(13);
    });

    it('shoud return fizz when it is a multiple of 3', () => {
        expect(fizzbuzz(3)).toBe('fizz');
        expect(fizzbuzz(6)).toBe('fizz');
    });

    it('shoud return buzz when it is a multiple of 5', () => {
        expect(fizzbuzz(5)).toBe('buzz');
        expect(fizzbuzz(10)).toBe('buzz');
    });

    it('should return fizzbuzz if multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
        expect(fizzbuzz(30)).toBe('fizzbuzz');
    });

    it('should throw an error if not number', () => {
        expect(() => fizzbuzz(true)).toThrow();
        expect(() => fizzbuzz('hi')).toThrow();
    });

});