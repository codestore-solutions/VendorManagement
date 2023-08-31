import * as yup from 'yup';

const createVendorSchema = yup.object().shape({
    firstName: yup.string().required().max(50).label('First Name'),
    lastName: yup.string().required().max(50).label('Last Name'),
    email: yup.string().required().email().label('Email'),
    countryCode: yup.number().required().min(0).label('Country code'),
    phoneNumber: yup
        .string()
        .required()
        .matches(
            /^[0-9]{6,14}$/,
            'Invalid phone number format.'
        ),
    businessAdminId: yup.number().required().integer().label('Business Admin ID'),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            { message: 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.' }
        )
        .required()
        .label('Password'),
});


const companyInfoSchema = yup.object().shape({
    businessName: yup.string().required().min(1).max(100).label('Business Name'),
    landmark: yup.string().required().min(1).max(100).label('Landmark'),
    street: yup.string().required().min(1).max(100).label('Street'),
    city: yup.string().required().min(1).max(50).label('City'),
    state: yup.string().required().min(1).max(50).label('State'),
    zipCode: yup.string().required().label('ZIP Code'),
    country: yup.string().required().min(1).max(50).label('Country'),
    latitude: yup.number().required().min(-90).max(90).label('Latitude'),
    longitude: yup.number().required().min(-180).max(180).label('Longitude'),
    email: yup.string().email().label('Email'),
    countryCode: yup.number().required().min(0).label('Country code'),
    phoneNumber: yup
        .string()
        .required()
        .matches(
            /^[0-9]{6,14}$/,
            'Invalid phone number format.'
        ),
});


const companyOverviewSchema = yup.object().shape({
    generalDetail: yup.string().required().min(1).max(500).label('General Business Details'),
    dateOfEstablishment: yup.date().required().label('Date of Establishment'),
    areaDescription: yup.string().required().min(1).max(400).label('Geographic Service Area Description'),
    vendorBusinessType: yup.string().required().min(1).max(100).label('Vendor Business Type'),
    insured: yup.boolean().required().label('Insured'),
    licensed: yup.boolean().required().label('Licensed'),
    grossAnnualSale: yup.number().required().positive().integer().label('Gross Annual Sale'),
    currency: yup.string().required().min(1).max(10).label('Currency'),
});


const bankDetailsSchema = yup.object().shape({
    bankName: yup.string().required().min(1).max(100).label('Bank Name'),
    beneficiaryName: yup.string().required().min(1).max(100).label('Beneficiary Name'),
    accountNumber: yup.string().required()
        .test('valid-account-number', 'Invalid account number', value => {
            const isDigitsOnly = /^\d+$/.test(value);
            if (!isDigitsOnly) return false;
            return value.replace(/\s/g, '').length === 16; // Example validation
        })
});

export { companyInfoSchema, companyOverviewSchema, bankDetailsSchema };

export default createVendorSchema;