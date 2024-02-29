import { API_BASE_URL, HEADERS, ENDPOINTS } from 'path/to/api-config';

const fetchVenueBookings = async (venueId) => {
	const headers = HEADERS();

	const url = `${API_BASE_URL}${ENDPOINTS.venues.bookingsByVenue(venueId)}`;

	const response = await fetch(url, {
		method: 'GET',
		headers,
	});

	if (!response.ok) {
		throw new Error('Failed to fetch bookings');
	}

	const data = await response.json();
	return data.bookings;
};

export default fetchVenueBookings;
