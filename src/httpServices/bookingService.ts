// import Http from "./httpCommon";

// export const createBooking = async (data: any) => {
//     return Http.post('bookings', data);
// }

// export const fetchBookingDetails = async (id: string) => {
//     return Http.get(`bookings/${id}?include=establishment,bike`);
// }

// export const fetchActiveBookings = async (bikeId: string) => {
//     return Http.get(`bookings/${bikeId}/activeBooking`);
// }

// export const fetchAllBookingsByBikeId = async(bikeId: string) => {
//     return Http.get(`bookings/bike/${bikeId}`);
// }

// export const requestCheckout = async (bookingId: string, establishmentId: string) =>  {
//     return Http.get(`bookings/${bookingId}/${establishmentId}/requestingCheckout`);
// }
