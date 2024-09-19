import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate a string', () => {
    expect(pipe.transform('Hello World', 5)).toBe('Hello...');
  });

  it('should not truncate a string', () => {
    expect(pipe.transform('Hello', 10)).toBe('Hello');
  });
});
