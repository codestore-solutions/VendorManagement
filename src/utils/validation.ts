export const validatePhoneNumber = (rule: any, value: string, callback: any) => {
    const phoneRegex = /^[0-9]{10}$/; // Assumes 10 digits phone number
    if (value && !phoneRegex.test(value)) {
        callback('Please enter a valid 10-digit phone number!');
    } else {
        callback();
    }
};