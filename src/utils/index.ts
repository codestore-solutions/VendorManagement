import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorMessages } from "src/assets/errorMessages";


export function validatePhoneNumber(phoneNumber: string) {
    // Regular expression to validate phone numbers with country code
    const regex = /^\+\d{1,3}-\d{1,14}$/;

    if (!regex.test(phoneNumber)) {
        throw new HttpException({
            statusCode: HttpStatus.BAD_REQUEST,
            message: ErrorMessages.INVALID_PHONE_NUMBER.message,
            success: false
        }, HttpStatus.BAD_REQUEST);
    }
    return phoneNumber;
}


export function transformArrayToIntArray(value: any, key: string): number[] {
    console.log(value, '0000000000')
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