import { PipeTransform, Injectable,  ArgumentMetadata, BadRequestException } from '@nestjs/common';

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


@Injectable()
export class YupValidationPipe implements PipeTransform {
    constructor(private schema) { }

    async transform(value: any, metadata: ArgumentMetadata) {
        console.log(value, metadata)

        try {
            if(metadata.type !== 'body'){
                return value;
            }
            const data = await this.schema.validate(value);
            console.log(data)

            return data;
        } catch(error){
            console.log(error)
            if (error &&  error.message) {
                throw new BadRequestException(error.message);
            }
        }
        return value;
    }
}
