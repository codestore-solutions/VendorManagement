import {
    Body, Controller, Get, Param, ParseIntPipe,
    Post, Query, Req, UploadedFiles, UseInterceptors, UsePipes, ValidationPipe
} from '@nestjs/common';
import { BankDetails, CompanyInfoDto, CompanyOverview, 
    CreateVendorDto, Documentation } from '../dto/create-vendor.dto';
import { VendorService } from '../vendor.service';
import { ApiBody, ApiConsumes, ApiCreatedResponse, ApiNotFoundResponse,
    ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags
} from '@nestjs/swagger';
import { response } from 'src/assets/response';
import { GetVendorBusinessQuery, GetVendorDto } from '../dto/vendor.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { uploadFile } from 'src/utils';
import { Request } from 'express';
import { FileUploadPipe } from 'src/pipe';


@ApiTags('Vendors')
@Controller('v1/vendors')
export class VendorController {
    constructor(private readonly vendorService: VendorService) { }


    /**--------------Creates vendor on registration------------------*/

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
        await this.vendorService.createVendorProfile(createVendorDto);
        return response.VENDOR_CREATED_SUCCESSFULLY;
    }


    /**--------------Updates company details of vendor--------------- */

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Post('updateCompanyInfo/:businessEntityId')
    @ApiCreatedResponse({
        description: response.BUSINESS_UPDATED_SUCCESSFULLY,
    })
    @ApiOperation({
        summary: 'Update company details',
    })
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateCompanyBusinessDetails(
        @Body() companyInfoDto: CompanyInfoDto,
        @Param('businessEntityId', ParseIntPipe) businessEntityId: number) {

        await this.vendorService.updateCompanyInfo(businessEntityId, companyInfoDto);
        return response.BUSINESS_UPDATED_SUCCESSFULLY;
    }


    /**--------------Updates company overview details of vendor--------------- */

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Post('updateCompanyOverview/:businessEntityId')
    @ApiCreatedResponse({
        description: response.BUSINESS_UPDATED_SUCCESSFULLY,
    })
    @ApiOperation({
        summary: 'Updates Company overview',
    })
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateCompanyOverviewDetails(
        @Body() companyOverview: CompanyOverview,
        @Param('businessEntityId', ParseIntPipe) businessEntityId: number) {

        await this.vendorService.updateCompanyOverview(businessEntityId, companyOverview);
        return response.BUSINESS_UPDATED_SUCCESSFULLY;
    }


    /**--------------Updates vendor documents--------------- */

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Post('addBusinessDocuments/:businessEntityId')
    @ApiCreatedResponse({
        description: response.BUSINESS_UPDATED_SUCCESSFULLY,
    })
    @ApiOperation({
        summary: 'Update business vendor documentation details',
        description: 'Updates vendor business details'
    })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Upload multiple image files',
        type: Documentation,
    })
    @ApiQuery({
        name: 'vendorBusinessId',
        required: true,
        type: Number,
        description: 'ID value associated with the uploaded images',
    })
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'businessRegCert', maxCount: 1 },
        { name: 'identifyProof', maxCount: 1 },
        { name: 'addressProof', maxCount: 1 },
    ]))
    async updateVendorDocumenation(@UploadedFiles(FileUploadPipe) files: {
        businessRegCert: Express.Multer.File[],
        identifyProof: Express.Multer.File[], addressProof: Express.Multer.File[]
    }, @Req() request: Request,
        @Param('businessEntityId', ParseIntPipe) businessEntityId: number) {

        const businessRegCert = files.businessRegCert[0]
        const identifyProof = files.identifyProof[0]
        const addressProof = files.addressProof[0]

        const businessRegCertName = uploadFile(businessRegCert)
        const identifyProofName = uploadFile(identifyProof)
        const addressProofName= uploadFile(addressProof)


        const baseUrl = request.protocol + '://' + request.get('host');

        await this.vendorService.handleDocumentation(businessEntityId, businessRegCertName, 
            identifyProofName, addressProofName, baseUrl);
        return response.VENDOR_UPDATED_SUCCESSFULLY;
    }


    /**--------------Updates company banking details of vendor--------------- */

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Post('updateCompanyBankingDetails/:businessEntityId')
    @ApiCreatedResponse({
        description: response.BUSINESS_UPDATED_SUCCESSFULLY,
    })
    @ApiOperation({
        summary: 'Updates Company anking details',
    })
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateCompanyBankingDetails(
        @Body() bankDetails: BankDetails,
        @Param('businessEntityId', ParseIntPipe) businessEntityId: number) {

        await this.vendorService.updateBankingDetails(businessEntityId, bankDetails);
        return response.BUSINESS_UPDATED_SUCCESSFULLY;
    }

    /**-----------Gets vendors based on list of id's/ used by order processing----------- */

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Get('getVendorListByIds')
    @ApiResponse({ status: 200, description: 'OK', })
    @UsePipes(new ValidationPipe({ transform: true }))
    async getStoresByVendorIds(
        @Query() query: GetVendorBusinessQuery
    ) {
        const { vendorIds } = query;
        return this.vendorService.getVendorsByIds(vendorIds);
    }


    /**--------------Gets vendors based on id--------------- */

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
}