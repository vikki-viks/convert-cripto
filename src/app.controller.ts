import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrencyConvertDto } from './currencyConvertDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConvertCurrencyResponse } from './convertCurrencyResponse';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('currency')
  @ApiOperation({ description: 'Convert currency' })
  @ApiResponse({
    status: 200,
    type: ConvertCurrencyResponse,
  })
  @Get('/currency/convert')
  convertCurrency(
    @Query() { amount = '1', from, to = 'tether' }: CurrencyConvertDto,
  ) {
    return this.appService.convertCurrency({ amount, from, to });
  }
}
