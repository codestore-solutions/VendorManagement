import * as yup from 'yup';

export class CompanyContactInfo {
    static validationSchema = yup.object().shape({
        businessName: yup.string().required().max(200, 'Business name must not exceed 200 characters.'),
        landmark: yup.string().required().max(100, 'Landmark must not exceed 100 characters.'),
        street1: yup.string().required().max(100, 'Street 1 must not exceed 100 characters.'),
        street2: yup.string().required().max(100, 'Street 2 must not exceed 100 characters.'),
        city: yup.string().required().max(50, 'City must not exceed 50 characters.'),
        state: yup.string().required().max(50, 'State must not exceed 50 characters.'),
        zipCode: yup.string().required(),
        country: yup
            .string()
            .required()
            .matches(/^[A-Z]{2}$/, 'Invalid country code format. Use two uppercase letters.'),
        latitude: yup
            .number()
            .required()
            .min(-90)
            .max(90)
            .test('is-valid-latitude', 'Invalid latitude', (value) => !isNaN(value)),
        longitude: yup
            .number()
            .required()
            .min(-180)
            .max(180)
            .test('is-valid-longitude', 'Invalid longitude', (value) => !isNaN(value)),
        email: yup.string().required().email(),
        phoneNumber: yup
            .string()
            .required()
            .matches(/^\d{2}\s\d+$/, 'Invalid phone number format. Use "91 8976543451".')
            .min(13, 'Phone number must be at least 13 characters')
            .max(15, 'Phone number must not exceed 15 characters'),
    });
}