import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class FileUploadInterceptor implements NestInterceptor {
    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest();
        const files = req.files; // Files will be available in the 'files' property of the request.

        // Validate the files here
        const businessRegCert = files?.businessRegCert;
        const identifyProof = files?.identifyProof;
        const addressProof = files?.addressProof;
        console.log(req.body, req.files,'body')

        if (!businessRegCert || businessRegCert.length === 0) {
            throw new BadRequestException('Business registration certificate file is required.');
        }

        if (!identifyProof || identifyProof.length === 0) {
            throw new BadRequestException('Identification proof file is required.');
        }

        if (!addressProof || addressProof.length === 0) {
            throw new BadRequestException('Address proof file is required.');
        }

        // If the execution reaches this point, it means the files are valid.
        return next.handle();
    }
}