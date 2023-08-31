import Http from './httpCommon';

export const getVendorsOfBusinessAdmin = async (id: number) => {
	return Http.get(`api/v1/vendors/getVendorsByBusinessAdminId/${id}` );
};