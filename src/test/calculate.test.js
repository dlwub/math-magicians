import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('test calculate logic ', () => {
  const obj = {
    total: 3,
    next: 4,
    operation: '+',
  };
  test('should return an object with null values', () => {
    expect(calculate(obj, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  const obj2 = {
    total: '9',
    next: '0',
    operation: '-',
  };

  test('should return an empty object', () => {
    expect(calculate(obj2, '0')).toEqual({});
  });

  const obj3 = {
    total: '9',
    next: '0',
    operation: '-',
  };

  test('should update next', () => {
    expect(calculate(obj3, '2')).toEqual({ total: '9', next: '2', operation: '-' });
  });

  const obj4 = {
    total: '9',
    next: '1',
    operation: 'x',
  };

  test('should append to next', () => {
    expect(calculate(obj4, '2')).toEqual({ total: '9', next: '12', operation: 'x' });
  });

  const obj5 = {
    total: null,
    next: '1',
  };

  test('Should update  next and clear value', () => {
    expect(calculate(obj5, '2')).toEqual({ total: null, next: '12' });
  });

  const obj6 = {
    total: null,
    next: '1.3',
  };

  test('Should update  next', () => {
    expect(calculate(obj6, '.')).toEqual({ total: null, next: '1.3' });
  });

  const obj7 = {
    total: null,
    next: '1',
  };

  test('Should update  next', () => {
    expect(calculate(obj7, '.')).toEqual({ total: null, next: '1.' });
  });

  const obj8 = {
    total: '3',
    next: '1',
    operation: '+',
  };

  test('Should update  next ', () => {
    expect(calculate(obj8, '.')).toEqual({ total: '3', next: '1.', operation: '+' });
  });

  const obj9 = {
    total: '3.5',
    next: '1',
    operation: '+',
  };

  test('Should update  next ', () => {
    expect(calculate(obj9, '.')).toEqual({ total: '3.5', next: '1.', operation: '+' });
  });

  const obj10 = {
    total: '3',
    next: '1',
    operation: '+',
  };

  test('Should update  next ', () => {
    expect(calculate(obj10, '.')).toEqual({ total: '3', next: '1.', operation: '+' });
  });

  const obj11 = {
    total: '3',
    next: '1',
    operation: '+',
  };

  test('Should return 4', () => {
    expect(calculate(obj11, '=')).toEqual({ total: '4', next: null, operation: null });
  });

  const obj12 = {
    total: '3',
    next: '1',
    operation: null,
  };

  test('Should return 4', () => {
    expect(calculate(obj12, '=')).toEqual({});
  });

  const obj13 = {
    total: null,
    next: '1',
    operation: '-',
  };

  test('Should negate next', () => {
    expect(calculate(obj13, '+/-')).toEqual({ total: null, next: '-1', operation: '-' });
  });

  const obj14 = {
    total: '3',
    next: null,
    operation: '+',
  };

  test('Should negate total', () => {
    expect(calculate(obj14, '+/-')).toEqual({ total: '-3', next: null, operation: '+' });
  });

  const obj15 = {
    total: '3',
    next: null,
    operation: null,
  };

  test('Should return operation', () => {
    expect(calculate(obj15, '+')).toEqual({ total: '3', next: null, operation: '+' });
  });

  const obj16 = {
    total: '3',
    next: null,
    operation: '+',
  };

  test('Should return operation', () => {
    expect(calculate(obj16, '-')).toEqual({ total: '3', next: null, operation: '-' });
  });

  const obj17 = {
    total: null,
    operation: '+',
  };

  test('Should make total 0', () => {
    expect(calculate(obj17, '-')).toEqual({ total: 0, operation: '-' });
  });

  const obj18 = {
    total: '4',
    next: '1',
    operation: '+',
  };

  test('Should update operation', () => {
    expect(calculate(obj18, '-')).toEqual({ total: operate('4', '1', '+'), next: null, operation: '-' });
  });

  const obj19 = {
    next: null,
  };

  test('Should return operation', () => {
    expect(calculate(obj19, '-')).toEqual({ operation: '-' });
  });

  const obj20 = {
    next: '3',
  };

  test('Should update object', () => {
    expect(calculate(obj20, '-')).toEqual({ total: '3', next: null, operation: '-' });
  });
});
