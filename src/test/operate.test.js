import operate from '../logic/operate';

describe('test operate logic ', () => {
  test('should return 5', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  test('should return -1', () => {
    expect(operate('2', '3', '-')).toBe('-1');
  });

  test('should return 6', () => {
    expect(operate('2', '3', 'x')).toBe('6');
  });

  test('should return 1.5', () => {
    expect(operate('3', '2', '÷')).toBe('1.5');
  });

  test('should return an error message', () => {
    expect(operate('2', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('should return 1', () => {
    expect(operate('3', '2', '%')).toBe('1');
  });

  test('should return an error message', () => {
    expect(operate('3', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('should return an error message', () => {
    expect(operate('3', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('should throw an error message', () => {
    expect(() => operate('3', '0', '@')).toThrow("Unknown operation '@'");
  });
});
