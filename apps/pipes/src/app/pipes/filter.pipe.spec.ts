import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should filter a list', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(['Hello', 'World'], 'Hello')).toEqual(['Hello']);
  });

  it('should filter a list with numbers', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(['123', '456'], '123')).toEqual(['123']);
  });

  it('should filter a list with special characters', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(['!@#', '$%^'], '!@#')).toEqual(['!@#']);
  });

  it('should filter a list with partial search', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(['Hello', 'World'], 'Hel')).toEqual(['Hello']);
  });

  it('should filter a list with partial search and numbers', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(['123', '456'], '12')).toEqual(['123']);
  });
});
