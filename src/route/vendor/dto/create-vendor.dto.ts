// dto/create-vendor.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsISO8601, IsInt, IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, IsStrongPassword, MaxLength, ValidateIf, ValidateNested } from 'class-validator';
import { validatePhoneNumber } from 'src/utils';
import { CompanyContactInfo } from 'src/validations/business.validation';


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

  @IsNotEmpty()
  @IsPhoneNumber()
  @ApiProperty({ example: "8001234567" })
  phoneNumber: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ example: 91 })
  countryCode: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ example: 3 })
  businessAdminId: number;

  @IsNotEmpty()
  @IsStrongPassword()
  @ApiProperty({ example: 'Password@123$5' })
  password: string;
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
  street: string;

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

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ example: 91 })
  countryCode: number;

  @IsString()
  @ApiProperty({ example: '8921214567' })
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

  @IsString()
  @ApiProperty({ example: 'Clothing' })
  vendorBusinessType: string;

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
  @ApiProperty({ example: "SBI" })
  bankName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "Ramesh mp" })
  beneficiaryName: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({ example: 7654272552827252 })
  accountNumber: string;
}

const vendorBusinessData = {
  businessName: 'Indian Spices Emporium',
  landmark: 'Near Gandhi Chowk',
  street: '123 Market Street',
  city: 'Mumbai',
  state: 'Maharashtra',
  zipCode: '400001',
  country: 'India',
  latitude: 19.0760,
  longitude: 72.8777,
  email: 'contact@indianspices.com',
  countryCode: 91,
  phoneNumber: '9876543210'
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