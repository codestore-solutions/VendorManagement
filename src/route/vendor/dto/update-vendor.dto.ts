// update-vendor.dto.ts

import { IsOptional, IsString, IsEnum } from 'class-validator';
import { VendorStatusEnum } from 'src/assets/constants';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateVendorDto {
    @ApiProperty({ example: 'https://example.com/profile.png' })
    @IsOptional()
    @IsString()
    profile_picture?: string;

    @ApiProperty({ example: 'John' })
    @IsOptional()
    @IsString()
    first_name?: string;

    @ApiProperty({ example: 'Doe' })
    @IsOptional()
    @IsString()
    last_name?: string;

    @ApiProperty({ example: 'johndoe@example.com' })
    @IsOptional()
    @IsString()
    email?: string;

    @ApiProperty({ example: '+1234567890' })
    @IsOptional()
    @IsString()
    phone_number?: string;

}
