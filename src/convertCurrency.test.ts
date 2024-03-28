import { convertCurrency } from './convertCurrency';

describe('ConvertCurrency', () => {
  it('works', async () => {
    expect(convertCurrency(1, 2, '3')).toBe(1.5);
  });
});
