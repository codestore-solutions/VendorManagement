import Http from './httpCommon';
import { BusinessInfoOverviewInterface, CompanyInfoInterface, CreateVendorInterface } from '@/types';


interface UpdateUserDto {
	firstName: string;
	lastName: string;
	idDetails: { idTypeId: number; idValue: string; };
	email: string;
	countryCode: string;
	mobile: string;
}


export const getOperatingSystems = async () => {
	return Http.get('operating-systems');
}

export const registerDevice = async (data: any) => {
	return Http.post('device-info', data);
};



export const fetchbloodGroup = async () => {
	return Http.get('blood-type');
};

//Not Being Used
export const updateUser = async (data: UpdateUserDto, userId: string) => {
	return Http.put(`user/${userId}`, data);
}

export const deleteUserDetails = async (userId: string) => {
	return Http.delete(`user/${userId}`);
}

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


export const fetchVendorRegistrationProgress = async (businessId: number) => {
	return Http.get(`api/v1/vendors/getVendorBusinessDetailsSubmissionProgress/${businessId}`);
};

export const fetchVendorBusinessDetails = async (businessId: number) => {
	return Http.get(`api/v1/vendors/getVendorBusinessDetails/${businessId}`);
};

export const fetchUserTypes = async () => {
	return Http.get('user-type');
}

export const fetchUserDetails = async (userId: string) => {
	return Http.get(`user/${userId}`);
};

// NOT BEING USED
export const fetchBikeInformation = async (userId: string) => {
	return Http.get(`bike/user/${userId}`);
};



export const sendVerificationMail = async (userId: string, applang:string) => {
	return Http.get(`user/sendVerificationMail/${userId}?lang=${applang}`);
}
