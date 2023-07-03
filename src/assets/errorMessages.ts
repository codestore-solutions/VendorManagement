export const ErrorMessages = {

    INVALID_PHONE_NUMBER: {
        message: "Phone number is not valid",
        code: "INVALID_PHONE_NUMBER"
    },

    VENDOR_ALREADY_EXIST: {
        message: "Vendor already exists with email",
        code: "VENDOR_ALREADY_EXIST"    
    },

    VENDOR_NOT_FOUND: {
        code: "VENDOR_NOT_FOUND",
        message: "Vendor not found"
    },

    INVALID_PAGINATON_INPUT: {
        code: 'INVALID_PAGINATON_INPUT',
        message: 'Both pageSize and pageNumber must be provided together'
    },


    INVALID_VALUE: {
        code: 'INVALID_VALUE',
        message: 'value is not valid, retry'
    },


    INVALID_NEGATIVE_VALUE: {
        code: "INVALID_NEGATIVE_VALUE",
        message: "negative value is not allowed"
    },
    

    INVALID_NOT_ACCEPTED_CUSTOMER_UPDATE: {
        code: 'INVALID_NOT_ACCEPTED_CUSTOMER_UPDATE',
        message: 'Order is not reached at destination'
    },


    INTERNAL_SERVER_ERROR: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal server error"
    },


    INVALID_PICKUP: {
        code: 'INVALID_PICKUP',
        message: 'Orders are not assigned to current delivery agent'
    },


    NOT_AUTHORIZED: {
        code: 'NOT_AUTHORIZED.',
        message: 'Author is not authorized to update this status'
    },


    ADDRESS_NOT_FOUND: {
        code: 'ADDRESS_NOT_FOUND',
        mesage: 'Address not found'
    },


    SOME_ERROR_OCCURED: {
        code: 'SOME_ERROR_OCCURED',
        message: 'Some Error Occured',
    },


    SESSION_TIMEOUT_SEND_MAIL: {
        code: 'SESSION_TIMEOUT_SEND_MAIL',
        message: 'Session timeout. Request again to get a mail'
    },


    SESSION_EXPIRED: {
        code: 'SESSION_EXPIRED',
        message: 'Session Expired. Login again to continue.'
    },


    INVALID_USERNAME_OR_PASSWORD: {
        code: 'INVALID_USERNAME_OR_PASSWORD',
        message: 'Invalid Username Or Password',
    },


    MAIL_NOT_SENT: {
        code: 'MAIL_NOT_SENT',
        message: 'Mail Not Sent',
    },


    NOT_IMPLEMENTED: {
        code: 'NOT_IMPLEMENTED',
        message: 'Not Implemented',
    },


    EMAIL_NOT_FOUND: {
        code: 'EMAIL_NOT_FOUND',
        message: 'Email Not Found',
    },


    USER_IS_ALREADY_VERIFIED: {
        code: 'USER_IS_ALREADY_VERIFIED',
        message: 'User is verified already',
    },
};