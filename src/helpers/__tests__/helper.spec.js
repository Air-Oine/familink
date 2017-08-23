import Helper from '../Helper';

/* TEST OF THE PHONE NUMBER */

it('is a valid number', () => {
  expect(Helper.isValidPhoneNumber('0601020304')).toBeTruthy();
});

it('is not a valid number (too long)', () => {
  expect(Helper.isValidPhoneNumber('060102030405')).not.toBeTruthy();
});

it('is not a valid number (too short)', () => {
  expect(Helper.isValidPhoneNumber('06010203')).not.toBeTruthy();
});

it('is not a number at all', () => {
  expect(Helper.isValidPhoneNumber('THEGAME')).not.toBeTruthy();
});

/* TEST OF THE PASSWORD */

it('is a valid password', () => {
  expect(Helper.isValidPassword('1234')).toBeTruthy();
});

it('is not a valid password (too long)', () => {
  expect(Helper.isValidPassword('12345')).not.toBeTruthy();
});

it('is not a valid password (too short)', () => {
  expect(Helper.isValidPassword('123')).not.toBeTruthy();
});

it('is not a valid password (NaN)', () => {
  expect(Helper.isValidPassword('NEO')).not.toBeTruthy();
});

/* TEST OF THE EMAIL */

it('is a valid email', () => {
  expect(Helper.isValidEmail('nightking@westeros.com')).toBeTruthy();
});

it('is not a valid email ()', () => {
  expect(Helper.isValidEmail('nightking-westeros.com')).not.toBeTruthy();
});

it('is not a valid email ()', () => {
  expect(Helper.isValidEmail('nightking@westeros')).not.toBeTruthy();
});

it('is not an email at all', () => {
  expect(Helper.isValidEmail('JON TARGARYEN')).not.toBeTruthy();
});
