export const constants = {
    SEQUELIZE: 'SEQUELIZE',

    VENDOR_REPOSITORY: 'VENDOR_REPOSITORY',

    LOCAL_GUARD: 'local',
    MAIL_LOCAL_GUARD: 'mailLocal',
    APIS_PREFIX: 'api',
};


export const PRISMA_CLIENT = 'PrismaClient';

export enum VendorStatusEnum {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DETAILS_SUBMISSION_INCOMPLETE = 'DETAILS_SUBMISSION_INCOMPLETE',
    DETAILS_SUBMISSION_COMPLETED = 'DETAILS_SUBMISSION_COMPLETED',
    REJECTED = "REJECTED"
}

export const tableNameConstants = {
    vendor: 'vendor',
};


export const swaggerConstants = {
    SWAGGER_TITLE: 'Vendor management module',
    SWAGGER_DESCRIPTION: 'Vendor management module APIs description',
    SWAGGER_VERSION: '1.0',
}

export const errorMessages = {
    INVALID_CREDS: "Credentials are wrong",
    VENDOR_IS_NOT_REGISTERED: 'Vendor is not registered',
    EMAIL_ALREADY_EXIST: 'Email already exist',
    CATEGORY_NOT_FOUND: 'Category not found',
    BUSINESS_NOT_FOUND: 'Business not found',
    CREATING_VENDOR: 'An error occurred while creating the vendor and store.',
    RECORDS_NOT_FOUND: 'No Record is Present in Database',
    ID_NOT_FOUND: 'No Record found with given id',

    USER_ID_NOT_FOUND: `The User Id doesn't exist`,
    USER_TYPE_ID_NOT_FOUND: `The User Type Id doesn't exist`,

    NO_USER_PRESENT_IN_DB: `No User is present in DB`,
    NO_USER_TYPE_EXIST_IN_DB: `No User type Exists in DB`,

    NO_ID_TYPE_EXIST_IN_DB: `No Id Type Exists in DB`,
    ID_TYPE_NOT_FOUND: `Id Type Not Found`,
};