
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { transformArrayToIntArray } from 'src/utils';

export class GetVendorDto {
    @ApiProperty({ example: 1 })
    vendor_id: number;

    @ApiProperty({ example: 1 })
    user_id: number;

    @ApiProperty({ example: 'https://example.com/profile.png' })
    profile_picture: string;

    @ApiProperty({ example: 'John' })
    first_name: string;

    @ApiProperty({ example: 'Doe' })
    last_name: string;

    @ApiProperty({ example: 'johndoe@example.com' })
    email: string;

    @ApiProperty({ example: '+1234567890' })
    phone_number: string;

    @ApiProperty({ example: 'ACTIVE' })
    status: string;

    @ApiProperty({ example: '2023-06-25T12:34:56.789Z' })
    created_at: string;

    @ApiProperty({ example: '2023-06-25T12:34:56.789Z' })
    updated_at: string;
}


export class GetVendorBusinessQuery {
    @Transform(({ value }) => transformArrayToIntArray(value, 'vendor id'))
    @ApiProperty({ type: [Number], name: 'vendorIds', description: 'List of vendor IDs'})
    vendorIds: number[];
}