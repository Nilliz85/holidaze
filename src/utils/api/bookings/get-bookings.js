import { API_BASE_URL, ENDPOINTS } from '../api-config';

export const fetchBookings = async () => {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.bookings}`);
};