import Big from 'big.js';

export function convertCurrency(
  fromCurrencyPrice: number,
  toCurrencyPrice: number,
  amount: string,
) {
  const fromCurrencyPriceAsBig = new Big(fromCurrencyPrice);
  const toCurrencyPriceAsBig = new Big(toCurrencyPrice);

  // first convert starting sum to USD
  const resultInUSD = fromCurrencyPriceAsBig.times(amount);

  // then convert USD to desired currency
  return resultInUSD.div(toCurrencyPriceAsBig).toNumber();
}
