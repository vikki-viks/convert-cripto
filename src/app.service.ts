import { BadRequestException, Injectable } from '@nestjs/common';
import { convertCurrency } from './convertCurrency';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  async convertCurrency({
    from,
    to,
    amount,
  }: {
    from: string;
    to: string;
    amount: string;
  }) {
    const baseUrl = this.configService.get<string>('CRYPTOBANK_BASE_URL');

    const response = await fetch(new URL('v0/coins/prices', baseUrl));

    const resultCurrency: { data: { key: string; price: number }[] } =
      await response.json();

    const exchangeRateFrom = resultCurrency.data.find((el) => el.key === from);
    const exchangeRateTo = resultCurrency.data.find((el) => el.key === to);

    if (!exchangeRateFrom || !exchangeRateTo) {
      throw new BadRequestException('Unknown currency');
    }

    const result = convertCurrency(
      exchangeRateFrom.price,
      exchangeRateTo.price,
      amount,
    );

    return { amount: Number(amount), from, to, result };
  }
}
