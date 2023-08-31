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
  confirmPassword: string;
}

export interface SignUpFormFinalData
  extends CreateVendorInterface,
  PartialSignUpDetails { }

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

export interface BankDetailInterface {
  bankName: string;
  beneficiaryName: string;
  accountNumber: number;
}


export interface VendorBusinessInterface {
  id: number;
  address: Address | null;
  addressId: number | null;
  vendorId: number;
  businessName?: string | null;
  countryCode?: number | null;
  phoneNumber?: string | null;
  email?: string | null;
  generalDetail?: string | null;
  dateOfEstablishment?: string | null;
  areaDescription?: string | null;
  vendorBusinessType?: string | null;
  insured?: boolean | null;
  licensed?: boolean | null;
  grossAnnualSale?: number | null;
  currency?: string | null;
  bankName?: string | null;
  beneficiaryName?: string | null;
  accountNumber?: string | null;
  businessRegCert?: string | null;
  identityProof?: string | null;
  addressProof?: string | null;
  formStep: number;
  createdAt: string; 
  updatedAt?: string | null;
}

interface Address {
  id: number;
  landmark: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  latitude?: number | null;
  longitude?: number | null;
  createdAt: string; 
  updatedAt?: string | null; 
}