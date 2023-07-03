// dto/create-vendor.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsPhoneNumber, IsString, MaxLength } from 'class-validator';
import { validatePhoneNumber } from 'src/utils';


export class CreateVendorDto {

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ example: 5 })
  vendor_id: number;
  
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty({ example: "Amit" })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty({ example: "Sharma" })
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: "amit.sharma@example.com" })
  email: string;

  @Transform(({ value }) => validatePhoneNumber(value))
  @IsNotEmpty()
  @IsPhoneNumber()
  @ApiProperty({ example: "+91-8001234567" })
  phoneNumber: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ example: 3 })
  business_admin_id: number;
}
