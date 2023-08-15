import { Controller, Post, Body, Get, Param, Put, Delete, ValidationPipe, ParseIntPipe, Query, UsePipes } from '@nestjs/common';
import { BusinessService } from '../business.service';
import { CreateBusinessDto } from '../dto/create-business.dto';
import { UpdateBusinessDto } from '../dto/update-business.dto';
import {
    ApiTags, ApiCreatedResponse, ApiOkResponse,
    ApiNotFoundResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse
} from '@nestjs/swagger';
import { response } from 'src/assets/response';
import { GetBusinessByIdsParams, GetVendorBusinessQuery, BusinessResponseDto } from '../dto/business.dto';


@ApiTags('Businesss')
@Controller('businesss')
export class BusinessController {
    constructor(private readonly BusinessService: BusinessService) { }

    // @ApiOperation({ summary: 'Create a new Business' })
    // @ApiCreatedResponse({ description: response.Business_CREATED_SUCCESSFULLY })
    // @Post('create')
    // async create(@Body() createBusinessDto: CreateBusinessDto) {
    //     await this.BusinessService.createBusiness(createBusinessDto);
    //     return response.Business_CREATED_SUCCESSFULLY
    // }


    // @ApiOperation({ summary: 'Update an existing Business' })
    // @ApiOkResponse({ description: 'Business updated successfully.', })
    // @ApiNotFoundResponse({ description: 'Business not found.' })
    // @Put('updateByVendorId/:vendorId')
    // async update(@Param('vendorId', ParseIntPipe) vendorId: number,
    //     @Body() updateBusinessDto: UpdateBusinessDto) {
    //     await this.BusinessService.updateBusiness(vendorId, updateBusinessDto);
    //     return response.BUSINESS_UPDATED_SUCCESSFULLY
    // }


    // @ApiOperation({ summary: 'Get a Business by ID' })
    // @ApiOkResponse({ description: 'Business found and returned successfully.' })
    // @ApiNotFoundResponse({ description: 'Business not found.' })
    // @Get(':id')
    // getById(@Param('id') id: number) {
    //     return this.BusinessService.getBusinessById(id);
    // }


    // @Get('getBusinesssListByVendorIds')
    // @ApiResponse({ status: 200, description: 'OK', type: [ BusinessResponseDto ] })
    // @UsePipes(new ValidationPipe({ transform: true }))
    // async getBusinesssByVendorIds(
    //     @Query() query: GetVendorBusinessQuery
    // ) {
    //     const { vendorIds } = query;
    //     return this.BusinessService.getBusinesssByVendorIds(vendorIds);
    // }


    // @ApiOperation({ summary: 'Get all Businesss by Vendor ID' })
    // @ApiOkResponse({ description: 'Businesss found and returned successfully.' })
    // @Get('vendor/:id')
    // getByVendorId(@Param('id') id: number) {
    //     return this.BusinessService.getBusinesssByVendorId(id);
    // }


    // @Get(':ids')
    // @ApiParam({ name: 'ids', description: 'list of Business IDs', example: [2, 3] })
    // @ApiOkResponse({ description: 'OK', type: BusinessResponseDto })
    // async getBusinesssByIds(@Param(ValidationPipe) params: GetBusinesssByIdsParams) {
    //     const { ids } = params;
    //     return this.BusinessService.getBusinesssByIds(ids);
    // }


    // @ApiOperation({ summary: 'Delete a Business by ID' })
    // @ApiOkResponse({ description: 'Business deleted successfully.' })
    // @ApiNotFoundResponse({ description: 'Business not found.' })
    // @Delete(':id')
    // delete(@Param('id') id: number): Promise<void> {
    //     return this.BusinessService.deleteBusiness(id);
    // }
}
