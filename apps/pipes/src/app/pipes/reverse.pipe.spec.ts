import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should reverse a string', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('Hello World')).toBe('dlroW olleH');
  });

  it('should reverse a string with numbers', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('123456789')).toBe('987654321');
  });

  it('should reverse a string with special characters', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('!@#$%^&*()')).toBe(')(*&^%$#@!');
  });

  it('should reverse a string with spaces', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('Hello World')).toBe('dlroW olleH');
  });
});
