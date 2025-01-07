const {toBeOrNotToBe, throwIfNegative} = require('../index');

// const toBeOrNotToBe = require('./index').toBeOrNotToBe;
// const  throwIfNegative = require('./index').throwIfNegative;

// test() and it() are alomost the same in functionality
// test('function add 2 + 4 is equal to 6')
// it('should return 6 when 2 + 4')


// toBe()
test("toBe - checks strict equality", () => {
  const sum = 5 + 10;
  // sum should be 15
  expect(sum).toBe(15);
});

// toEqual()
it("toEqual - checks object eqauality", () => {
  const user = { name: "John Doe", age: 35 };
  const expectedUser = { name: "John Doe", age: 35 };

  expect(user).toEqual(expectedUser);
});

// toBeNull() and toBeUndefined()
it('toBeNull - checks if actual is null', () => {
    const result = toBeOrNotToBe(3);
    expect(result).toBeNull();
});

it('toBeUndefined - checks if actual is undefined', () => {
    const result = undefined;
    expect(result).toBeUndefined();
});

// toBeTruthy() and toBeFalsy()
test('toBeTruthy checks if actual value is truthy', ()=> {
    const result = toBeOrNotToBe(10); // true
    const num = 10;
    expect(num).toBeTruthy();
});

test('toBeFalsy checks if actual value is falsy', ()=> {
    const result = 20 < 15;
    expect(result).toBeFalsy();
});

test('not operator', () => {
    const result = 20 < 15;
    expect(result).not.toBe(true);
});

test('toThrow - check if a function throws and error', () => {
    // when you are testing for thrown errors make sure you are using a callback function
    expect(() => throwIfNegative(-5)).toThrow();
});

test('toThrow - check if a function is not throwing and error', () => {
    // when you are testing for thrown errors make sure you are using a callback function
    expect(() => throwIfNegative(5)).not.toThrow();
});






