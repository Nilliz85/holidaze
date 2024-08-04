import { API_BASE_URL, HEADERS } from '../api-config';

export const getUserBookings = async (username) => {
	try {
		const response = await fetch(`${API_BASE_URL}/profiles/${username}/bookings?_venue=true`, {
			method: 'GET',
			headers: HEADERS(),
		});

		if (!response.ok) {
			throw new Error('Failed to fetch bookings');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching bookings:', error);
		throw error;
	}
};
