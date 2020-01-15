import { getValidIndex } from './utils';

describe('Should test getValidIndex()', () => {
  it('Should return 0 if value is negative or 0', () => {
    expect(getValidIndex(-1, 15)).toBe(0);
    expect(getValidIndex(0, 15)).toBe(0);
  });

  it('Should return same value if the value is in between 0 and arrayLength', () => {
    expect(getValidIndex(12, 15)).toBe(12);
  });

  it('Should return arrayLength - 1 if the value is over arrayLength', () => {
    expect(getValidIndex(33, 15)).toBe(14);
    expect(getValidIndex(15, 15)).toBe(14);
  });
});
