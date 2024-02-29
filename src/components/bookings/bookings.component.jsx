import { API_BASE_URL, HEADERS, ENDPOINTS } from '../../utils/api/api-config';

export const createBooking = async (token, bookingDetails) => {
	if (!token) {
		return {
			success: false,
			message: 'No authentication token found.',
		};
	}

	const bookingUrl = `${API_BASE_URL}${ENDPOINTS.bookings.base}`;

	try {
		const response = await fetch(bookingUrl, {
			method: 'POST',
			headers: HEADERS(),
			body: JSON.stringify(bookingDetails),
		});

		const result = await response.json();

		if (!response.ok) {
			throw new Error(result.message || 'Booking failed');
		}

		return {
			success: true,
			message: 'Thank you for booking with us!',
			data: result,
		};
	} catch (error) {
		return {
			success: false,
			message: error.message || 'Booking failed. Something went wrong.',
		};
	}
};
