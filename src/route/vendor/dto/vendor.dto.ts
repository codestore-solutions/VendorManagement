
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { transformArrayToIntArray } from 'src/utils';

export class GetVendorDto {
    @ApiProperty({ example: 1 })
    businessId: number;

    @ApiProperty({ example: 1 })
    userId: number;

    @ApiProperty({ example: 'https://example.com/profile.png' })
    profilePicture: string;

    @ApiProperty({ example: 'John' })
    firstName: string;

    @ApiProperty({ example: 'Doe' })
    lastName: string;

    @ApiProperty({ example: 'johndoe@example.com' })
    email: string;

    @ApiProperty({ example: '+1234567890' })
    phoneNumber: string;

    @ApiProperty({ example: 'ACTIVE' })
    status: string;

    @ApiProperty({ example: '2023-06-25T12:34:56.789Z' })
    createdAt: string;

    @ApiProperty({ example: '2023-06-25T12:34:56.789Z' })
    updatedAt: string;
}


export class GetVendorBusinessQuery {
    @Transform(({ value }) => transformArrayToIntArray(value, 'vendor id'))
    @ApiProperty({ type: [Number], name: 'vendorIds', description: 'List of vendor IDs'})
    vendorIds: number[];
}