export const BASEURL = "http://localhost:3001"

export enum VendorStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DETAILS_SUBMISSION_INCOMPLETE = 'DETAILS_SUBMISSION_INCOMPLETE',
    DETAILS_SUBMISSION_COMPLETED = 'DETAILS_SUBMISSION_COMPLETED',
    REJECTED = 'Rejected'
}

export enum VendorStatusEnum {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    DETAILS_SUBMISSION_INCOMPLETE = 'Pending',
    DETAILS_SUBMISSION_COMPLETED = 'Pending',
    REJECTED = 'Rejected'
}

export const businessAdminId = 8;