import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createBooking } from '../../../components/bookings/bookings.component';
import { BookingContainer, BookingLabel, BookingInput, AddBookingButton, SuccessAndError } from './booking-form.styles.jsx';

const BookingForm = ({ venueId, maxGuests }) => {
	const [guests, setGuests] = useState(1);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [dateRange, setDateRange] = useState({ startDate: null, endDate: null }); // Assume you have a state to manage dateRange or get it from props

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Retrieve token from localStorage
		const token = localStorage.getItem('token');
		if (!token) {
			setError('No authentication token found. Please log in.');
			return;
		}

		// Construct bookingDetails object
		const bookingDetails = {
			dateFrom: dateRange.startDate,
			dateTo: dateRange.endDate,
			guests,
			venueId,
		};

		// Call the createBooking service with the token and booking details
		try {
			const response = await createBooking(token, bookingDetails);
			if (response.success) {
				setSuccess(response.message);
				setError(null); // Clear any existing errors
			} else {
				setError(response.message);
			}
		} catch (error) {
			// Handle any errors that occur during the booking process
			setError(error.message || 'An error occurred during the booking process.');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			{dateRange.startDate && dateRange.endDate && (
				<p>
					Booking from {new Date(dateRange.startDate).toDateString()} to {new Date(dateRange.endDate).toDateString()}
				</p>
			)}
			<BookingContainer>
				<BookingLabel htmlFor='guests'>Number of guests:</BookingLabel>
				<BookingInput type='number' id='guests' name='guests' value={guests} onChange={(e) => setGuests(parseInt(e.target.value, 10))} min='1' max={maxGuests} required />
				<AddBookingButton type='submit'>Book Venue</AddBookingButton>
			</BookingContainer>
			{error && <SuccessAndError>{error}</SuccessAndError>}
			{success && <SuccessAndError>{success}</SuccessAndError>}
		</form>
	);
};

BookingForm.propTypes = {
	venueId: PropTypes.string.isRequired,
	maxGuests: PropTypes.number.isRequired,
};

export default BookingForm;
