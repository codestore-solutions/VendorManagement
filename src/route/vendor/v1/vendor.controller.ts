import {
    Body, Controller, Get, Param, ParseIntPipe,
    Post, Put, Query, UploadedFiles, UseInterceptors, UsePipes, ValidationPipe
} from '@nestjs/common';
import {
    BankDetails, CompanyInfoDto, CompanyOverview,
    CreateVendorDto, Documentation, LoginUserDto
} from '../dto/create-vendor.dto';
import { VendorService } from '../vendor.service';
import {
    ApiBody, ApiConsumes, ApiCreatedResponse, ApiNotFoundResponse,
    ApiOkResponse, ApiOperation, ApiResponse, ApiTags
} from '@nestjs/swagger';
import { response } from 'src/assets/response';
import { GetVendorBusinessQuery, GetVendorDto } from '../dto/vendor.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { uploadFile } from 'src/utils';
import { FileUploadPipe, YupValidationPipe } from 'src/pipe';
import createVendorSchema, { bankDetailsSchema, companyInfoSchema, 
    companyOverviewSchema } from 'src/validations/vendor.validation';
import { PrismaClient } from '@prisma/client';


@ApiTags('Vendors')
@Controller('v1/vendors')
export class VendorController {
    constructor(private readonly vendorService: VendorService) { }

    /**--------------Sign in api vendor/business------------------*/

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Post('signin')
    @ApiOperation({
        summary: 'Sign in/test api',
        description: 'Signin api for vendor and business admin'
    })
    async login(@Body() loginUserDto: LoginUserDto) {
        return await this.vendorService.login(loginUserDto);
    }

    /**--------------Creates vendor on registration------------------*/

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Post('create')
    @ApiCreatedResponse({
        description: response.vendor_created,
    })
    @ApiOperation({
        summary: 'Create vendor',
        description: 'Creates vendor with the information provided'
    })
    @UsePipes(new YupValidationPipe(createVendorSchema))
    async createVendor(@Body() createVendorDto: CreateVendorDto) {
        await this.vendorService.createVendorProfile(createVendorDto);
        return response.vendor_created;
    }


    /**--------------Updates company details of vendor--------------- */

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Put('updateCompanyInfo/:businessId')
    @ApiCreatedResponse({
        description: response.business_updated,
    })
    @ApiOperation({
        summary: 'Update company details',
    })
    @UsePipes(new YupValidationPipe(companyInfoSchema))
    async updateCompanyBusinessDetails(
        @Body() companyInfoDto: CompanyInfoDto,
        @Param('businessId', ParseIntPipe) businessId: number) {

        await this.vendorService.updateCompanyInfo(businessId, companyInfoDto);
        return response.business_updated;
    }


    /**--------------Updates company overview details of vendor--------------- */

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Put('updateCompanyOverview/:businessId')
    @ApiCreatedResponse({
        description: response.business_updated,
    })
    @ApiOperation({
        summary: 'Updates Company overview',
    })
    @UsePipes(new YupValidationPipe(companyOverviewSchema))
    async updateCompanyOverviewDetails(
        @Body() companyOverview: CompanyOverview,
        @Param('businessId', ParseIntPipe) businessId: number) {

        await this.vendorService.updateCompanyOverview(businessId, companyOverview);
        return response.business_updated;
    }


    /**--------------Updates vendor documents--------------- */

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Post('addBusinessDocuments/:businessId')
    @ApiCreatedResponse({
        description: response.business_updated,
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
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'businessRegCert', maxCount: 1 },
        { name: 'identityProof', maxCount: 1 },
        { name: 'addressProof', maxCount: 1 },
    ]))
    async updateVendorDocumenation(@UploadedFiles(new FileUploadPipe(new PrismaClient())) files: {
        businessRegCert: Express.Multer.File[],
        identityProof: Express.Multer.File[],
        addressProof: Express.Multer.File[],
    }, @Param('businessId', ParseIntPipe) businessId: number) {

        let businessRegCertFile: string | undefined;
        let identityProofFile: string | undefined;
        let addressProofFile: string | undefined;

        if (files.businessRegCert && files.businessRegCert.length > 0) {
            const businessRegCert = files.businessRegCert[0];
            businessRegCertFile = uploadFile(businessRegCert);
        }

        if (files.identityProof && files.identityProof.length > 0) {
            const identityProof = files.identityProof[0];
            identityProofFile = uploadFile(identityProof);
        }

        if (files.addressProof && files.addressProof.length > 0) {
            const addressProof = files.addressProof[0];
            addressProofFile = uploadFile(addressProof);
        }

        await this.vendorService.handleDocumentation(businessId, businessRegCertFile,
            identityProofFile, addressProofFile);
        return response.document_updated;
    }


    /**--------------Updates company banking details of vendor--------------- */

    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @Put('updateCompanyBankingDetails/:businessId')
    @ApiCreatedResponse({
        description: response.business_updated,
    })
    @ApiOperation({
        summary: 'Updates Company banking details',
    })
    @UsePipes(new YupValidationPipe(bankDetailsSchema))
    async updateCompanyBankingDetails(
        @Body() bankDetails: BankDetails,
        @Param('businessId', ParseIntPipe) businessId: number) {
        await this.vendorService.updateBankingDetails(businessId, bankDetails);
        return response.business_updated;
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
    @Get('getVendorDetailsById/:id')
    getVendorById(@Param('id', ParseIntPipe) id: number) {
        return this.vendorService.getVendorById(id);
    }


    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    @ApiOkResponse({
        description: 'Vendor found and returned successfully.',
        type: GetVendorDto,
    })
    @ApiOperation({ summary: 'Get Vendors by Business admin ID' })
    @ApiNotFoundResponse({ description: 'Vendors not found.' })
    @Get('getVendorsByBusinessAdminId/:id')
    getVendorByBusinessAdminId(@Param('id', ParseIntPipe) id: number) {
        return this.vendorService.getVendorByBusinessAdminId(id);
    }

    /**----------Get vendor form submission progress -------- */
    @ApiOperation({ summary: 'Get Vendor profile status' })
    @ApiNotFoundResponse({ description: 'Vendor not found.' })
    @Get('getVendorProfileStatus/:vendorId')
    getVendorProfileStatus(@Param('vendorId', ParseIntPipe) vendorId: number) {
        return this.vendorService.getVendorProfileStatus(vendorId);
    }

    /**----------Get vendor form profile status-------- */
    @ApiOperation({ summary: 'Get Vendor registration progress' })
    @ApiNotFoundResponse({ description: 'Vendor not found.' })
    @Get('getVendorBusinessDetailsSubmissionProgress/:businessId')
    getVendorDetailsSubmissionProgress(@Param('businessId', ParseIntPipe) businessId: number) {
        return this.vendorService.getVendorDetailsSubmissionProgress(businessId);
    }

    /**----------Get vendor business details-------- */
    @ApiOperation({ summary: 'Get Vendor business details by ID' })
    @ApiNotFoundResponse({ description: 'Vendor not found.' })
    @Get('getVendorBusinessDetails/:businessId')
    getVendorBusinessDetails(@Param('businessId', ParseIntPipe) businessId: number) {
        return this.vendorService.getVendorBusinessDetails(businessId);
    }
}