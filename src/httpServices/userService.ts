import Http from './httpCommon';
import { BankDetailInterface, BusinessInfoOverviewInterface,
	CompanyInfoInterface, CreateVendorInterface } from '@/types';


export const signUpUser = async (userDetails:  CreateVendorInterface) => {
	return Http.post('api/v1/vendors/create', { ...userDetails });
};

export const updateVendorBusinessCompanyInfo = async (id: number, companyInfo: CompanyInfoInterface) => {
	return Http.put(`api/v1/vendors/updateCompanyInfo/${id}`, { ...companyInfo });
};

export const updateVendorBusinessCompanyOverview = async (id: number, 
		companyOverview: BusinessInfoOverviewInterface) => {
	return Http.put(`api/v1/vendors/updateCompanyOverview/${id}`, { ...companyOverview });
};

export const updateVendorBusinessDocs = async (id: number, 
	businessDocs: any) => {
	return Http.post(`api/v1/vendors/addBusinessDocuments/${id}`, businessDocs, { "Content-Type": "multipart/form-data"});
};

export const updateBusinessBankingDetails = async (id: number, bankingDetails:  BankDetailInterface) => {
	return Http.put(`api/v1/vendors/updateCompanyBankingDetails/${id}`, bankingDetails, );
};

export const getVendorProfileStatus = async (id: number) => {
	return Http.get(`api/v1/vendors/getVendorProfileStatus/${id}` );
};

export const getVendorBusinessDetails = async (businessId: number) => {
	return Http.get(`api/v1/vendors/getVendorBusinessDetails/${businessId}`);
}

export const fetchVendorRegistrationProgress = async (businessId: number) => {
	return Http.get(`api/v1/vendors/getVendorBusinessDetailsSubmissionProgress/${businessId}`);
};

export const fetchVendorBusinessDetails = async (businessId: number) => {
	return Http.get(`api/v1/vendors/getVendorBusinessDetails/${businessId}`);
};
