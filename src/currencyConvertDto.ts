import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class CurrencyConvertDto {
  @ApiProperty({ type: String, required: true })
  @IsString()
  from!: string;

  @ApiProperty({ type: String, required: false, default: 'tether' })
  @IsString()
  @IsOptional()
  to: string | undefined;

  @ApiProperty({ type: String, required: false, default: '1' })
  @IsNumberString()
  @IsOptional()
  amount: string | undefined;
}
