// vendor.service.ts

import { HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import {
    BankDetails,
    CompanyInfoDto,
    CompanyOverview, CreateVendorDto, LoginUserDto,
} from './dto/create-vendor.dto';
import { PRISMA_CLIENT, VendorStatusEnum, errorMessages } from 'src/assets/constants';
import { PrismaClient } from '@prisma/client';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { ErrorMessages } from 'src/assets/errorMessages';


@Injectable()
export class VendorService {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) { }
    private readonly logger = new Logger(VendorService.name);

    async handleCompanyContactInfo(id: number, formStep: number,
        companyContactInfo: CompanyInfoDto) {

        const addressData = {
            landmark: companyContactInfo.landmark,
            street: companyContactInfo.street,
            city: companyContactInfo.city,
            state: companyContactInfo.state,
            zipCode: companyContactInfo.zipCode,
            country: companyContactInfo.country,
            latitude: companyContactInfo.latitude,
            longitude: companyContactInfo.longitude,
        }

        await this.prisma.business.update({
            where: { id },
            data: {
                businessName: companyContactInfo.businessName,
                email: companyContactInfo.email,
                phoneNumber: companyContactInfo.phoneNumber,
                countryCode: companyContactInfo.countryCode,
                address: {
                    upsert: {
                        create: {
                            ...addressData
                        },
                        update: {
                            ...addressData
                        }
                    }
                },
                formStep: formStep > 2 ? formStep : 2
            },
        });
    }

    async handleCompanyOverview(id: number, formStep: number, companyOverview: CompanyOverview) {
        await this.prisma.business.update({
            where: { id },
            data: {
                ...companyOverview,
                formStep: formStep > 3 ? formStep : 3
            },
        });
    }

    async handleDocumentation(id: number, businessRegCert: string,
        identityProof: string, addressProof: string) {

        const businessData = await this.prisma.business.findFirst({ where: { id } })
        if (!businessData) {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                success: false
            }, HttpStatus.BAD_REQUEST);
        }

        const formStep = businessData.formStep;

        await this.prisma.business.update({
            where: { id },
            data: {
                businessRegCert: businessRegCert ? businessRegCert : businessData.businessRegCert,
                identityProof: identityProof ? identityProof : businessData.identityProof,
                addressProof: addressProof ? addressProof : businessData.addressProof,
                formStep: formStep > 4 ? formStep : 4
            },
        });
    }

    async handleBankingInfo(id: number, bankDetails: BankDetails) {
        await this.prisma.business.update({
            where: { id },
            data: {
                ...bankDetails,
                formStep: 4,
                vendor: {
                    update: {
                        status: VendorStatusEnum.DETAILS_SUBMISSION_COMPLETED,
                    }
                }
            },
        });
    }

    async login(loginUserDto: LoginUserDto) {
        const { email, password } = loginUserDto;
        const user = await this.prisma.user.findFirst({
            where: { email }
        })
        
        if(user.password === password) return user;

        throw new HttpException({
            statusCode: HttpStatus.UNAUTHORIZED,
            message: errorMessages.INVALID_CREDS,
            success: false
        }, HttpStatus.UNAUTHORIZED);
    }


    /**--------------Creates vendor--------------- */

    async createVendorProfile(createVendorDto: CreateVendorDto) {

        const { firstName, lastName, email, countryCode,
            phoneNumber, businessAdminId, password } = createVendorDto;

        const user = await this.prisma.user.findFirst({
            where: { email }
        })

        if (user) {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: errorMessages.EMAIL_ALREADY_EXIST,
                success: false
            }, HttpStatus.BAD_REQUEST);
        }

        // API must be called here to user management for creating user (email, password)
        const newUser = await this.prisma.user.create({
            data: {
                email: email,
                password: password,
                role: 3
            }
        })

        await this.prisma.vendor.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                businessAdminId: businessAdminId,
                id: newUser.id,
                phoneNumber: phoneNumber,
                countryCode: countryCode,
                status: 'DETAILS_SUBMISSION_INCOMPLETE',
                business: {
                    create: {
                        id: newUser.id,
                        formStep: 1,
                    }
                }
            }
        })
    }


    /**--------------Updates company details of vendor--------------- */

    async updateCompanyInfo(id: number, companyInfoDto: CompanyInfoDto) {

        const businessData = await this.prisma.business.findFirst({ where: { id } })
        if (!businessData) {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                success: false
            }, HttpStatus.BAD_REQUEST);
        }
        await this.handleCompanyContactInfo(id, businessData.formStep, companyInfoDto);

    }


    /**--------------Updates company overview of vendor--------------- */

    async updateCompanyOverview(id: number, companyOverview: CompanyOverview) {
        const businessData = await this.prisma.business.findFirst({ where: { id } })
        if (!businessData) {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                success: false
            }, HttpStatus.BAD_REQUEST);
        }
        await this.handleCompanyOverview(id, businessData.formStep, companyOverview);
    }


    /**--------------Updates banking details of vendor--------------- */

    async updateBankingDetails(id: number, bankDetails: BankDetails) {

        const businessData = await this.prisma.business.findFirst({ where: { id } })
        if (!businessData) {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                success: false
            }, HttpStatus.BAD_REQUEST);
        }
        await this.handleBankingInfo(id, bankDetails);
    }

    async getVendorDetailsSubmissionProgress(id: number) {
        const businessData = await this.prisma.business.findFirst({ where: { id } })
        if (!businessData) {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                success: false
            }, HttpStatus.BAD_REQUEST);
        }

        return { step: businessData.formStep };
    }

    async getVendorProfileStatus(id: number) {
        const vendorData = await this.prisma.vendor.findFirst({ where: { id } })
        if (!vendorData) {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                success: false
            }, HttpStatus.BAD_REQUEST);
        }

        return { status: vendorData.status };
    }

    async getVendorBusinessDetails(id: number) {
        const businessData = await this.prisma.business.findFirst(
            {
                where: { id },
                include: {
                    address: true
                }
            })

        if (!businessData) {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: errorMessages.VENDOR_IS_NOT_REGISTERED,
                success: false
            }, HttpStatus.BAD_REQUEST);
        }

        return businessData;
    }

    async getVendorById(id: number) {
        const vendor = await this.prisma.vendor.findUnique(
            {
                where: { id },
                include: {
                    business: {
                        include: {
                            address: true
                        }
                    }
                }
            });

        if (!vendor) {
            throw new HttpException({
                statusCode: HttpStatus.NOT_FOUND,
                message: ErrorMessages.VENDOR_NOT_FOUND,
                success: false
            }, HttpStatus.NOT_FOUND);
        }

        return vendor;
    }


    async getVendorByBusinessAdminId(id: number) {
        const vendor = await this.prisma.vendor.findMany(
            { where: { businessAdminId: id }, });

        if (!vendor) {
            throw new HttpException({
                statusCode: HttpStatus.NOT_FOUND,
                message: ErrorMessages.VENDORS_NOT_FOUND,
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
