import { Body, Controller, Get, Param, ParseIntPipe, 
    Post, Put, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateVendorDto } from '../dto/create-vendor.dto';
import { VendorService } from '../vendor.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiNotFoundResponse, 
    ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateVendorDto } from '../dto/update-vendor.dto';
import { response } from 'src/assets/response';
import { GetVendorBusinessQuery, GetVendorDto } from '../dto/vendor.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';


@ApiTags('Vendors')
@Controller('v1/vendors')
export class VendorController {
    constructor(private readonly vendorService: VendorService) { }


    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Post('create')
    @ApiCreatedResponse({
        description: response.VENDOR_CREATED_SUCCESSFULLY,
    })
    @ApiOperation({
        summary: 'Create vendor',
        description: 'Creates vendor with the information provided'
    })
    @UsePipes(new ValidationPipe({ transform: true }))
    async createVendor(@Body() createVendorDto: CreateVendorDto) {
        console.log(createVendorDto)
        await this.vendorService.createVendor(createVendorDto);
        return response.VENDOR_CREATED_SUCCESSFULLY;
    }


    @Get('getVendorListByIds')
    @ApiResponse({ status: 200, description: 'OK',})
    @UsePipes(new ValidationPipe({ transform: true }))
    async getStoresByVendorIds(
        @Query() query: GetVendorBusinessQuery
    ) {
        const { vendorIds } = query;
        return this.vendorService.getVendorsByIds(vendorIds);
    }


    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @ApiOkResponse({
        description: 'Vendor found and returned successfully.',
        type: GetVendorDto,
    })
    @ApiOperation({ summary: 'Get Vendor by ID' })
    @ApiNotFoundResponse({ description: 'Vendor not found.' })
    @Get(':id')
    getVendorById(@Param('id', ParseIntPipe) id: number) {
        return this.vendorService.getVendorById(id);
    }

    
    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    // @ApiOkResponse({
    //     description: response.VENDOR_UPDATED_SUCCESSFULLY,
    // })
    // @ApiOperation({ summary: 'Update vendor by id' })
    // @ApiNotFoundResponse({ description: 'Vendor not found.' })
    // @Put(':id')
    // async updateVendor(
    //     @Param('id', ParseIntPipe) id: number,
    //     @Body() updateVendorDto: UpdateVendorDto,
    // ) {
    //     await this.vendorService.updateVendor(id, updateVendorDto);
    //     return response.VENDOR_UPDATED_SUCCESSFULLY;
    // }
}
