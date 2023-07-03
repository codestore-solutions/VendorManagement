import { IsOptional, IsString, IsNumber, IsNotEmpty, ValidateNested, MaxLength, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';


class CreateAddressDto {
    @ApiProperty({ example: '123 Main Street' })
    @IsString()
    @IsNotEmpty()
    street: string;

    @ApiProperty({ example: 'Bangalore' })
    @IsString()
    @IsNotEmpty()
    city: string;

    @ApiProperty({ example: 'Karnataka' })
    @IsString()
    @IsNotEmpty()
    state: string;

    @ApiProperty({ example: '560001' })
    @IsString()
    @IsNotEmpty()
    postalCode: string;

    @ApiProperty({ example: 'India' })
    @IsString()
    @IsNotEmpty()
    country: string;

    @ApiProperty({ example: 'Near Central Park' })
    @IsString()
    @IsNotEmpty()
    landmark: string;
}


export class UpdateBusinessDto {
    @ApiProperty({ example: 'P1/2 Store', maxLength: 50 })
    @IsString()
    @MaxLength(50)
    name: string;

    @ApiProperty({ example: 'A premium store offering high-quality products', maxLength: 250 })
    @IsString()
    @MaxLength(250)
    description?: string;

    @ApiProperty({ type: CreateAddressDto })
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto;

    @ApiProperty({ example: 1 })
    @IsInt()
    categoryId: number;
}