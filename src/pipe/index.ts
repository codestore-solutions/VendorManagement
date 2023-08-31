import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class FileUploadPipe implements PipeTransform {
    constructor(private prisma) { }
    async transform(value: any, metadata: ArgumentMetadata) {

        console.log(value, metadata)
        const businessRegCert = value.businessRegCert;
        const identityProof = value.identityProof;
        const addressProof = value.addressProof;

        const business = await this.prisma.business.findFirst({ where: { id: 7 } })

        const shouldValidateBusinessRegCert = !business.businessRegCert || businessRegCert?.length > 0;
        const shouldValidateIdentityProof = !business.identityProof || identityProof?.length > 0;
        const shouldValidateAddressProof = !business.addressProof || addressProof?.length > 0;

        if (shouldValidateBusinessRegCert) {
            if (!business.businessRegCert && (!businessRegCert || businessRegCert?.length === 0)) {
                throw new BadRequestException('Business registration certificate file is required.');
            }
            if (businessRegCert?.length > 1) {
                throw new BadRequestException('You can upload only one business registration certificate file.');
            }
        }

        if (shouldValidateIdentityProof) {
            if (!business.identityProof && (!identityProof || identityProof?.length === 0)) {
                throw new BadRequestException('Identification proof file is required.');
            }
            if (identityProof?.length > 1) {
                throw new BadRequestException('You can upload only one identification proof file.');
            }
        }

        if (shouldValidateAddressProof) {
            if (!business.addressProof && (!addressProof || addressProof?.length === 0)) {
                throw new BadRequestException('Address proof file is required.');
            }
            if (addressProof?.length > 1) {
                throw new BadRequestException('You can upload only one address proof file.');
            }
        }

        console.log( value, '1111111111111aaaaaaaaaaaaaaa')

        return value;
    }
}


@Injectable()
export class YupValidationPipe implements PipeTransform {
    constructor(private schema) { }

    async transform(value: any, metadata: ArgumentMetadata) {

        try {
            if (metadata.type !== 'body') {
                return value;
            }
            const data = await this.schema.validate(value);
            console.log(data)

            return data;
        } catch (error) {
            console.log(error)
            if (error && error.message) {
                throw new BadRequestException(error.message);
            }
        }
        return value;
    }
}
