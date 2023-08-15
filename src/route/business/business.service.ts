import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { PRISMA_CLIENT, errorMessages } from 'src/assets/constants';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class BusinessService {
    constructor(@Inject(PRISMA_CLIENT) private readonly prisma: PrismaClient) { }

    // async createbusiness(createbusinessDto: CreateBusinessDto) {
    //     await this.prisma.business.create({ data: createbusinessDto });
    // }


    // async updateBusiness(vendorId: number, updatebusinessDto: UpdateBusinessDto) {
    //     try {
    //         const business = await this.prisma.business.findFirst({
    //             where: { vendor_id: vendorId },
    //             include: { address: true, category: true },
    //         });

    //         if (!business) {
    //             throw new HttpException({
    //                 statusCode: HttpStatus.NOT_FOUND,
    //                 message: errorMessages.BUSINESS_NOT_FOUND,
    //                 success: false
    //             }, HttpStatus.NOT_FOUND);
    //         }

    //         const category = await this.prisma.businessCategory.findFirst({
    //             where: { category_id: updatebusinessDto.categoryId },
    //         });

    //         if (!category) {
    //             throw new HttpException({
    //                 statusCode: HttpStatus.BAD_REQUEST,
    //                 message: errorMessages.CATEGORY_NOT_FOUND,
    //                 success: false
    //             }, HttpStatus.BAD_REQUEST);
    //         }

    //         await this.prisma.business.update({
    //             where: { id: business.id },
    //             data: {
    //                 name: updatebusinessDto.name ?? business.name,
    //                 description: updatebusinessDto.description ?? business.description,
    //                 category: {
    //                     connect: { category_id: category.category_id }
    //                 },
    //                 address: {
    //                     create: {
    //                         street: updatebusinessDto.address?.street ?? business.address.street,
    //                         city: updatebusinessDto.address?.city ?? business.address.city,
    //                         state: updatebusinessDto.address?.state ?? business.address.state,
    //                         postalCode: updatebusinessDto.address?.postalCode ?? business.address.postalCode,
    //                         country: updatebusinessDto.address?.country ?? business.address.country,
    //                         landmark: updatebusinessDto.address?.landmark ?? business.address.landmark,
    //                     },
    //                 },
    //             },
    //         });
    //     } catch (error) {
    //         console.log(error)
    //         throw new HttpException({
    //             statusCode: error.status,
    //             message: error.message,
    //             success: false
    //         }, error.status);
    //     }
    // }


    // async getBusinesssByVendorIds(vendorIds: number[]) {
    //     return this.prisma.business.findMany({
    //         where: { vendor_id: { in: vendorIds } },
    //         include: { address: true, category: true },
    //     });
    // }


    // async getBusinessById(id: number) {
    //     // const business = await this.prisma.business.findFirst({ where: { business_id: id } });

    //     // if (!business) {
    //     //     throw new NotFoundException('business not found.');
    //     // }
    //     // return business;
    // }


    // async getBusinesssByVendorId(vendorId: number) {
    //     return this.prisma.business.findMany({ where: { vendor_id: vendorId } });
    // }


    // async getBusinesssByIds(ids: number[]) {
    //     return this.prisma.business.findMany({
    //         where: {
    //             id: { in: ids },
    //         },
    //     });
    // }


    // async deleteBusiness(id: number) {
    //     const business = await this.prisma.business.delete({ where: { id } });

    //     if (!business) {
    //         throw new NotFoundException('business not found.');
    //     }
    // }
}
