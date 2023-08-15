// vendor.service.ts

import { HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import {
    BankDetails,
    CompanyInfoDto,
    CompanyOverview, CreateVendorDto,
} from './dto/create-vendor.dto';
import { PRISMA_CLIENT, errorMessages } from 'src/assets/constants';
import { PrismaClient } from '@prisma/client';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { ErrorMessages } from 'src/assets/errorMessages';


@Injectable()
export class VendorService {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) { }
    private readonly logger = new Logger(VendorService.name);

    async handleCompanyContactInfo(id: number, companyContactInfo: CompanyInfoDto) {
        await this.prisma.business.update({
            where: { id },
            data: {
                ...companyContactInfo,
                formStep: 2
            },
        });
    }

    async handleCompanyOverview(id: number, companyOverview: CompanyOverview) {
        await this.prisma.business.update({
            where: { id },
            data: {
                ...companyOverview,
                formStep: 3
            },
        });
    }

    async handleDocumentation(id: number, businessRegCert: string,
        identifyProof: string, addressProof: string, baseUrl: string) {
        const businessRegCertUrl = baseUrl + '/files/' + businessRegCert;
        const identifyProofUrl = baseUrl + '/files/' + identifyProof;
        const addressProofUrl = baseUrl + '/files/' + addressProof;
        await this.prisma.business.update({
            where: { id },
            data: {
                businessRegCert: businessRegCertUrl,
                identityProof: identifyProofUrl,
                addressProof: addressProofUrl,
                formStep: 4
            },
        });
    }

    async handleBankingInfo(id: number, bankDetails: BankDetails) {
        await this.prisma.business.update({
            where: { id },
            data: {
                ...bankDetails,
                formStep: 5
            },
        });
    }


    /**--------------Creates vendor--------------- */
    
    async createVendorProfile(createVendorDto: CreateVendorDto) {
        try {
            const { firstName, lastName, email,
                phoneNumber, businessAdminId, password } = createVendorDto;

            // API must be called here to user management for creating user (email, password)

            const vendorId = 99; // it should be fetched from user management 

            await this.prisma.vendor.create({
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    businessAdminId: businessAdminId,
                    id: vendorId,
                    phoneNumber: phoneNumber,
                    status: 'DETAILS_SUBMISSION_INCOMPLETE',
                    business: {
                        create: {
                            formStep: 1
                        }

                    }
                }
            })

        } catch (error) {
            throw new HttpException({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: errorMessages.CREATING_VENDOR,
                success: false
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /**--------------Updates company details of vendor--------------- */

    async updateCompanyInfo(id: number, companyInfoDto: CompanyInfoDto) {
        try {
            const businessData = await this.prisma.business.findFirst({ where: { id } })
            if (!businessData) {
                throw new HttpException({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                    success: false
                }, HttpStatus.BAD_REQUEST);
            }
            await this.handleCompanyContactInfo(id, companyInfoDto);
        } catch (error) {
            this.logger.error('An error occurred while updating company details', error.message);
            if (errorMessages.VENDOR_IS_NOT_REGISTERED == error.message) {
                throw new HttpException({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                    success: false
                }, HttpStatus.BAD_REQUEST);
            }
            throw new HttpException(
                {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Error creating vendor business',
                    success: false,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }


    /**--------------Updates company overview of vendor--------------- */

    async updateCompanyOverview(id: number, companyOverview: CompanyOverview) {
        try {
            const businessData = await this.prisma.business.findFirst({ where: { id } })
            if (!businessData) {
                throw new HttpException({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                    success: false
                }, HttpStatus.BAD_REQUEST);
            }
            await this.handleCompanyOverview(id, companyOverview);
        } catch (error) {
            this.logger.error('An error occurred while updating overview details', error.message);
            if (errorMessages.VENDOR_IS_NOT_REGISTERED == error.message) {
                throw new HttpException({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                    success: false
                }, HttpStatus.BAD_REQUEST);
            }
            throw new HttpException(
                {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Error updating vendor business',
                    success: false,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }


    /**--------------Updates banking details of vendor--------------- */

    async updateBankingDetails(id: number, bankDetails: BankDetails) {
        try {
            const businessData = await this.prisma.business.findFirst({ where: { id } })
            if (!businessData) {
                throw new HttpException({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                    success: false
                }, HttpStatus.BAD_REQUEST);
            }
            await this.handleBankingInfo(id, bankDetails);
        } catch (error) {
            this.logger.error('An error occurred while updating overview details', error.message);
            if (errorMessages.VENDOR_IS_NOT_REGISTERED == error.message) {
                throw new HttpException({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                    success: false
                }, HttpStatus.BAD_REQUEST);
            }
            throw new HttpException(
                {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Error updating vendor business',
                    success: false,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getVendorById(id: number) {
        const vendor = await this.prisma.vendor.findUnique({ where: { id } });

        if (!vendor) {
            throw new HttpException({
                statusCode: HttpStatus.NOT_FOUND,
                message: ErrorMessages.VENDOR_NOT_FOUND,
                success: false
            }, HttpStatus.NOT_FOUND);
        }

        return vendor;
    }


    async updateVendor(id: number, updateVendorDto: UpdateVendorDto) {
        const vendor = await this.prisma.vendor.findUnique({ where: { id: id } });

        if (!vendor) {
            throw new HttpException({
                statusCode: HttpStatus.NOT_FOUND,
                message: ErrorMessages.VENDOR_NOT_FOUND,
                success: false
            }, HttpStatus.NOT_FOUND);
        }

        const updatedVendor = await this.prisma.vendor.update({
            where: { id: id },
            data: updateVendorDto,
        });

        return updatedVendor;
    }

    async getVendorsByIds(vendorIds: number[]) {

        return this.prisma.vendor.findMany({
            where: { id: { in: vendorIds } },
            include: {
                business: {
                    include: {
                        address: true,
                    },
                },
            },
        });
    }
}
