/* eslint-disable import/extensions */
import operate from '../operate';

test('Testing operate  functions', () => {
  expect(operate('1', '2', '+')).toBe('3');
  expect(operate('3', '1', '-')).toBe('2');
  expect(operate('3', '3', 'x')).toBe('9');
  expect(operate('3', '3', '÷')).toBe('1');
  expect(operate('3', '3', '%')).toBe('0');
});
