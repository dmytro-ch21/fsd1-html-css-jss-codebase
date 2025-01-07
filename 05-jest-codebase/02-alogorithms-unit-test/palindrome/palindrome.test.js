// const palindrome - decalring a variable (can be named as you want), you will just assign the import to it
// require() - function that accepts a module path to import it
// './palindrome' - the actual path to the module to import (make sure you have the export in it)

const palindrome = require('./palindrome');


describe('Palindrome Tests: ', () => {

    it('should be a function', () => {
        expect(typeof palindrome).toBe('function');
    });

    it('should return a boolean', () => {
        expect(typeof palindrome('hi')).toBe('boolean');
    });

    it('should return true if a string is palindrome', () => {
        expect(palindrome('kayak')).toBeTruthy();
        expect(palindrome('racecar')).toBeTruthy();
    });

    it('should return false if a string is not palindrome', () => {
        expect(palindrome('hello')).toBeFalsy();
        expect(palindrome('')).toBeFalsy();
    });

});

