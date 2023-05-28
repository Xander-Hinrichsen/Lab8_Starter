// unit.test.js
// TODO - Part 2
const functions = require('../code-to-unit-test/unit-test-me.js');

test('Positive Date1', ()=>{
  expect(functions.isDate('12/12/2012')).toBe(true);
});

test('Positive Date2', ()=>{
  expect(functions.isDate('00/00/0000')).toBe(true);
});

test('Negative Date1', ()=>{
  expect(functions.isDate('00/00/00')).toBe(false);
});

test('Negative Date2', ()=>{
  expect(functions.isDate('this is a thrilling experience!')).toBe(false);
});

test('Positive Email1', ()=>{
  expect(functions.isEmail('xhinrichsen@ucsd.edu')).toBe(true);
});

test('Positive Email2', ()=>{
  expect(functions.isEmail('xander@acmucsd.org')).toBe(true);
});

test('Negative Email1', ()=>{
  expect(functions.isEmail('@@@@@@.co')).toBe(false);
});

test('Negative Email2', ()=>{
  expect(functions.isEmail('-_-_-_-_-_-_-_-_-@-_-_-_-_-_-_-')).toBe(false);
});

test('Positive Hex1', ()=>{
  expect(functions.isHexColor('FFFFFF')).toBe(true);
});

test('Positive Hex2', ()=>{
  expect(functions.isHexColor('000000')).toBe(true);
});

test('Negative Hex1', ()=>{
  expect(functions.isHexColor('FFFFFFF')).toBe(false);
});

test('Negative Hex2', ()=>{
  expect(functions.isHexColor('FFGFFF')).toBe(false);
});

//
test('Positive Phone1', ()=>{
  expect(functions.isPhoneNumber('000-8675-309')).toBe(true);
});

test('Positive Phone2', ()=>{
  expect(functions.isPhoneNumber('123-4567-890')).toBe(true);
});

test('Negative Phone1', ()=>{
  expect(functions.isPhoneNumber('911')).toBe(false);
});

test('Negative Phone2', ()=>{
  expect(functions.isPhoneNumber('906-703-12a1')).toBe(false);
});

//
test('Positive Strong_password1', ()=>{
  expect(functions.isStrongPassword('gamer42069')).toBe(true);
});

test('Positive Strong_password2', ()=>{
  expect(functions.isStrongPassword('hello123')).toBe(true);
});

test('Negative Strong_password1', ()=>{
  expect(functions.isStrongPassword('g')).toBe(false);
});

test('Negative Strong_password2', ()=>{
  expect(functions.isStrongPassword('4')).toBe(false);
});