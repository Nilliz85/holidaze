import { API_BASE_URL, HEADERS, ENDPOINTS } from '../../utils/api/api-config';

export const createBooking = async (token, bookingDetails, existingBookings) => {
	if (!token) {
		return {
			success: false,
			message: 'No authentication token found.',
		};
	}

	const { dateFrom, dateTo } = bookingDetails;
	const now = new Date();
	const startDate = new Date(dateFrom);
	const endDate = new Date(dateTo);

	// Check if booking dates are in the past
	if (startDate < now) {
		return {
			success: false,
			message: 'You cannot book a venue for past dates.',
		};
	}

	// Check for overlapping dates
	const isOverlapping = existingBookings.some((booking) => {
		const existingStart = new Date(booking.dateFrom);
		const existingEnd = new Date(booking.dateTo);
		return startDate <= existingEnd && endDate >= existingStart;
	});

	if (isOverlapping) {
		return {
			success: false,
			message: 'Some of the chosen dates are unavailable.',
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
		console.error('Booking error:', error.message || 'Booking failed. Something went wrong.');
		return {
			success: false,
			message: error.message || 'Booking failed. Something went wrong.',
		};
	}
};

export const getUserBookings = async (userId) => {
	try {
		const response = await fetch(`${API_BASE_URL}${ENDPOINTS.bookings.base}/user/${userId}`, {
			method: 'GET',
			headers: HEADERS(),
		});

		const result = await response.json();

		if (!response.ok) {
			throw new Error(result.message || 'Failed to fetch bookings');
		}

		return result;
	} catch (error) {
		console.error('Error fetching bookings:', error);
		return [];
	}
};

export const cancelBooking = async (bookingId) => {
	try {
		const response = await fetch(`${API_BASE_URL}${ENDPOINTS.bookings.base}/${bookingId}`, {
			method: 'DELETE',
			headers: HEADERS(),
		});

		const result = await response.json();

		if (!response.ok) {
			throw new Error(result.message || 'Failed to cancel booking');
		}

		return {
			success: true,
			message: 'Booking cancelled successfully',
		};
	} catch (error) {
		console.error('Error cancelling booking:', error);
		return {
			success: false,
			message: error.message || 'Failed to cancel booking',
		};
	}
};
