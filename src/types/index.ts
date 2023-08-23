export interface CreateVendorInterface {
    firstName: string;
    lastName: string;
    email: string;
    countryCode: number;
    phoneNumber: string;
    businessAdminId: number;
    password: string;
}

interface PartialSignUpDetails {
    confirmPassword: string
}

export interface SignUpFormFinalData extends CreateVendorInterface, PartialSignUpDetails { }

export interface CompanyInfoInterface {
    businessName: string;
    landmark: string;
    street: string;
    countryCode: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    latitude: number;
    longitude: number;
    email: string;
    phoneNumber: string;
}

export interface BusinessInfoOverviewInterface {
    generalDetail: string;
    dateOfEstablishment: string;
    areaDescription: string;
    vendorBusinessType: number;
    insured: boolean;
    licensed: boolean;
    grossAnnualSale: number;
    currency: string;
}