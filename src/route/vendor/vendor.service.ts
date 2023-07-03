// vendor.service.ts

import { HttpException, HttpStatus, Inject, Injectable, Logger } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { PRISMA_CLIENT, errorMessages } from 'src/assets/constants';
import { PrismaClient } from '@prisma/client';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { ErrorMessages } from 'src/assets/errorMessages';


@Injectable()
export class VendorService {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) { }
    private readonly logger = new Logger(VendorService.name);

    async createVendor(createVendorDto: CreateVendorDto) {
        try {
            const { firstName, lastName, email,
                phoneNumber, business_admin_id, vendor_id } = createVendorDto;

            const vendor = await this.prisma.vendor.findFirst({ where: { email: email } })

            if (vendor) {
                throw new HttpException({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: errorMessages.EMAIL_ALREADY_EXIST,
                    success: false
                }, HttpStatus.BAD_REQUEST);
            }

            await this.prisma.$transaction(async (prisma: PrismaClient) => {

                const vendor = await prisma.vendor.create({
                    data: {
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                        business_admin_id: business_admin_id,
                        id: vendor_id,
                        phone_number: phoneNumber,
                    },
                });

                await prisma.business.create({
                    data: {
                        vendor: {
                            connect: { id: vendor.id }
                        },
                    },
                });
            });

        } catch (error) {
            this.logger.error('An error occurred while creating the vendor and store', error.message);
            if (errorMessages.EMAIL_ALREADY_EXIST == error.message) {
                throw new HttpException({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: errorMessages.EMAIL_ALREADY_EXIST,
                    success: false
                }, HttpStatus.BAD_REQUEST);
            }
            throw new HttpException({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: errorMessages.CREATING_VENDOR,
                success: false
            }, HttpStatus.INTERNAL_SERVER_ERROR);
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
                        category: true,
                        address: true,
                    },
                },
            },
        });
    }
}
