import { BASEURL } from "@/assets/constant";
import { verificationType } from "@/assets/dto";

export function getColorForVerificationState(state: verificationType| undefined): string {
    switch (state) {
        case 'ACTIVE':
            return '#50CD89';
        case 'REJECTED':
            return '#F1416C';
        case 'DETAILS_SUBMISSION_INCOMPLETE':
        case 'DETAILS_SUBMISSION_COMPLETED':
        case 'INACTIVE':
            return '#FFB526';
        default:
            return 'black';
    }
}

export const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const generateFileObj = (name: string, fileName: string) => ({
    name,
    url: `${BASEURL}/${fileName}`,
});


export function maskSensitiveInfo(input: string | null | undefined) {
    if(!input) return 
    const visibleChars = 4;
    const maskedChars = input.length - visibleChars;
  
    if (maskedChars <= 0) {
      return input; 
    }
  
    const maskedPart = '*'.repeat(maskedChars);
    const visiblePart = input.slice(maskedChars);
  
    return maskedPart + visiblePart;
  }