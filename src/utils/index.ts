import { HttpException, HttpStatus, UploadedFile } from "@nestjs/common";
import { ErrorMessages } from "src/assets/errorMessages";
import { randomBytes } from 'crypto';
import { parse } from "path";
const fs = require('fs');


export function validatePhoneNumber(phoneNumber: string) {
    // Regular expression to validate phone numbers with country code
    const regex = /^\+\d{1,3}-\d{1,14}$/;

    if (!regex.test(phoneNumber)) {
        return false
    }
    return true;
}


export function transformArrayToIntArray(value: any, key: string): number[] {
    const parsedValues = [];
    for (const ele of value) {
        const parsedValue = parseInt(ele, 10);
        if (isNaN(parsedValue)) {
            throw new HttpException({
                statusCode: HttpStatus.BAD_REQUEST,
                message: key + " " + ErrorMessages.INVALID_VALUE.message,
                success: false
            }, HttpStatus.BAD_REQUEST);
        }
        parsedValues.push(parsedValue)
    }
    return parsedValues;
}


export function generateUniqueSuffix(): string {
    const randomString = randomBytes(4).toString('hex');
    const timestamp = Date.now().toString();

    return `${timestamp}_${randomString}`;
}


export function uploadFile(file: any) {
    try {
        const uniqueFileSuffix = generateUniqueSuffix();
        const { name, ext } = parse(file.originalname);
        const fileName = `${name.replace(/\s/g, '')}_${uniqueFileSuffix}${ext}`
        fs.writeFileSync(`./files/${fileName}`, file.buffer);
        return fileName;
    } catch(error){
        console.log(error)
    }

}