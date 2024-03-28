import { ApiProperty } from '@nestjs/swagger';

export class ConvertCurrencyResponse {
  @ApiProperty({ type: Number })
  amount!: string;

  @ApiProperty({ type: String })
  from!: string;

  @ApiProperty({ type: String })
  to!: string;

  @ApiProperty({ type: Number })
  result!: number;
}
