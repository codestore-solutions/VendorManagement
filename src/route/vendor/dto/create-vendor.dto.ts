// dto/create-vendor.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsISO8601, IsInt, IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, IsStrongPassword, MaxLength, ValidateIf, ValidateNested } from 'class-validator';
import { validatePhoneNumber } from 'src/utils';
import { CompanyContactInfo } from 'src/valdiations/business.validtaion';


export class CreateVendorDto {

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
  businessAdminId: number;

  @IsNotEmpty()
  @IsStrongPassword()
  @ApiProperty({ example: 'password@123$5' })
  password: number;
}


export class CompanyInfoDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'My Business' })
  businessName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Landmark Example' })
  landmark: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Street 1 Example' })
  street1: string;

  @IsString()
  @ApiProperty({ example: 'Street 2 Example' })
  street2: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'City Example' })
  city: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'State Example' })
  state: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Zip Code Example' })
  zipCode: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Country Example' })
  country: string;

  @IsLatitude()
  @ApiProperty({ example: 40.7128 })
  latitude: number;

  @IsLongitude()
  @ApiProperty({ example: -74.0060 })
  longitude?: number;

  @IsEmail()
  @ApiProperty({ example: 'xyz@example.com' })
  email: string;

  @IsString()
  @ApiProperty({ example: '91 8921214567' })
  phoneNumber: string;
}


export class CompanyOverview {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'General business details...' })
  generalDetail: string;

  @IsISO8601()
  @ApiProperty({ example: '2023-07-20T00:00:00.000Z' })
  dateOfEstablishment: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Geographic service area description...' })
  areaDescription: string;

  @IsInt()
  @ApiProperty({ example: 1 })
  vendorBusinessType: number;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({ example: true })
  insured: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({ example: true })
  licensed: boolean;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 100000 })
  grossAnnualSale: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'INR' })
  currency: string;
}

export class Documentation {
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  businessRegCert: string;

  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  identifyProof: string;

  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  addressProof: string;
}

export class BankDetails {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: true })
  bankName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 100000 })
  identifyProof: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'INR' })
  addressProof: string;
}

const vendorBusinessData = {
  businessName: 'Indian Spices Emporium',
  landmark: 'Near Gandhi Chowk',
  street1: '123 Market Street',
  street2: 'Shop No. 56',
  city: 'Mumbai',
  state: 'Maharashtra',
  zipCode: '400001',
  country: 'India',
  latitude: 19.0760,
  longitude: 72.8777,
  email: 'contact@indianspices.com',
  phoneNumber: '+91 9876543210'
};

const vendorGeneralBusinessDetails = {
  generalDetail: 'We are a leading provider of high-quality products and services...',
  dateOfEstablishment: '2023-07-20T00:00:00.000Z',
  areaDescription: 'We provide our services across all major cities in India...',
  vendorBusinessType: 2,
  insured: false,
  licensed: true,
  grossAnnualSale: 200000,
  currency: 'INR',
};

const vendorBankDetails = {
  bankName: 'Axis Bank',
  beneficiaryName: 'Aman singh',
  accountNumber: '1234567890123456',
};


export class UpdateVendorDetails {

  @IsInt()
  @ApiProperty({ type: Number, example: 1 })
  id: number

  @ValidateNested()
  @ApiProperty({
    type: CompanyContactInfo, example: { ...vendorBusinessData }
  })
  companyContactInfo: CompanyContactInfo

  @ValidateNested()
  @ApiProperty({
    type: CompanyOverview, example: { ...vendorGeneralBusinessDetails }
  })
  companyOverview: CompanyOverview;

  @ValidateNested()
  @ApiProperty({
    type: BankDetails, example: { ...vendorBankDetails }
  })
  bankDetails: BankDetails;
}