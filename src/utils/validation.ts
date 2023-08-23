export const validatePhoneNumber = (rule: any, value: string, callback: any) => {
    const phoneRegex = /^[0-9]{10}$/; // Assumes 10 digits phone number
    if (value && !phoneRegex.test(value)) {
        callback('Please enter a valid 10-digit phone number!');
    } else {
        callback();
    }
};

export const validateLatitude = (rule: any, value: number, callback: any) => {
    if (value < -90 || value > 90) {
        callback('Invalid latitude. Latitude must be between -90 and 90.');
    } else {
        callback();
    }
}

export const validateLongitude = (rule: any, value: number, callback: any) => {
    if (value < -90 || value > 90) {
        callback('Invalid longitude. Longitude must be between -180 and 180.');
    } else {
        callback();
    }
}