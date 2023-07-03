import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBusinessDto {
  @ApiProperty({ example: 'Business Name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Business Description' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  address_id: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  business_admin_id: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  vendor_id: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  @IsNumber()
  category_id: number;
}
