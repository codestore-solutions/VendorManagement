
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { ArrayNotEmpty, IsArray, IsInt } from 'class-validator';
import { transformArrayToIntArray } from 'src/utils';


export class BusinessResponseDto {
    @ApiProperty({ example: 1, description: 'Business ID' })
    businessId: number;

    @ApiProperty({ example: 'My Business', description: 'Business name' })
    name: string;

    @ApiProperty({ example: 'Lorem ipsum dolor sit amet', description: 'Business description' })
    description: string;

    @ApiProperty({ example: 1, description: 'Category ID' })
    categoryId: number;

    @ApiProperty({ example: 'Category', description: 'Category name' })
    categoryName: string;

    @ApiProperty({ example: 'Category description', description: 'Category description' })
    categoryDescription: string;

    @ApiProperty({ example: '123 Street', description: 'Address street' })
    street: string;

    @ApiProperty({ example: 'City', description: 'Address city' })
    city: string;

    @ApiProperty({ example: 'State', description: 'Address state' })
    state: string;

    @ApiProperty({ example: '12345', description: 'Address postal code' })
    postalCode: string;

    @ApiProperty({ example: 'Country', description: 'Address country' })
    country: string;

    @ApiProperty({ example: 'Landmark', description: 'Address landmark' })
    landmark: string;
}



export class GetBusinessByIdsParams {
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    ids: number[];
}


export class GetVendorBusinessQuery {
    @Transform(({ value }) => transformArrayToIntArray(value, 'vendor id'))
    @ApiProperty({ type: [Number], name: 'vendorIds', description: 'List of vendor IDs'})
    vendorIds: number[];
}