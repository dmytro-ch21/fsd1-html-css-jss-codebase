const reversestring = require('./reversestring');

describe('Test Reverse String Function: ', () => {

    it('should be a function', () => {
        expect(typeof reversestring).toBe('function');
    });

    it('should return a string', () => {
        expect(typeof reversestring('hello')).toBe('string');
    });

    it('should return a reversed string', () => {
        expect(reversestring('hello')).toBe('olleh');    
        expect(reversestring('world')).toBe('dlrow');    
        expect(reversestring('test')).toBe('tset'); 
        expect(reversestring('')).toBe(''); 
    });

});