import Helper from '../src/helpers/Helper';

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

it('is a valid number', () => {
  expect(Helper.isValidPassword('1234')).toBeTruthy();
});

it('is not a valid number (too long)', () => {
  expect(Helper.isValidPassword('12345')).not.toBeTruthy();
});

it('is not a valid number (too short)', () => {
  expect(Helper.isValidPassword('123')).not.toBeTruthy();
});

it('is not a number at all', () => {
  expect(Helper.isValidPassword('NEO')).not.toBeTruthy();
});
