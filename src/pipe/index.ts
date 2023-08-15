import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class FileUploadPipe implements PipeTransform {
    transform(value: any) {
        const businessRegCert = value.businessRegCert;
        const identifyProof = value.identifyProof;
        const addressProof = value.addressProof;

        if (!businessRegCert || businessRegCert.length === 0) {
            throw new BadRequestException('Business registration certificate file is required.');
        }

        if (!identifyProof || identifyProof.length === 0) {
            throw new BadRequestException('Identification proof file is required.');
        }

        if (!addressProof || addressProof.length === 0) {
            throw new BadRequestException('Address proof file is required.');
        }

        if (businessRegCert.length > 1) {
            throw new BadRequestException('You can upload only one business registration certificate file.');
        }

        if (identifyProof.length > 1) {
            throw new BadRequestException('You can upload only one identification proof file.');
        }

        if (addressProof.length > 1) {
            throw new BadRequestException('You can upload only one address proof file.');
        }

        return value;
    }
}
