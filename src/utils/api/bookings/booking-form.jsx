import React, { useState, useEffect, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/user.context';
import { createBooking } from '../../../components/bookings/bookings.component';
import { BookingContainer, BookingFormGroup, BookingLabel, BookingInput, AddBookingButton, SuccessAndError } from './booking-form.styles.jsx';
import BookingCalendar from '../../../components/calendar/calendar.component';
import fetchVenueBookings from '../../../utils/api/bookings/get-bookings';

const schema = yup.object().shape({
	guests: yup.number().min(1, 'At least 1 guest').max(10, 'No more than 10 guests').required('Number of guests is required'),
});

const BookingForm = ({ venueId, maxGuests }) => {
	const { currentUser, token } = useContext(UserContext);
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [dateRange, setDateRange] = useState([null, null]);
	const [existingBookings, setExistingBookings] = useState([]);
	const [availableDates, setAvailableDates] = useState([]);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			guests: 1,
		},
	});

	useEffect(() => {
		const fetchBookings = async () => {
			const bookings = await fetchVenueBookings(venueId);
			setExistingBookings(bookings);
			const dates = bookings.map((booking) => ({
				start: new Date(booking.dateFrom),
				end: new Date(booking.dateTo),
			}));
			setAvailableDates(dates);
		};

		fetchBookings();
	}, [venueId]);

	const onSubmit = async (data) => {
		if (!currentUser) {
			navigate('/auth/signin');
			return;
		}

		if (!dateRange[0] || !dateRange[1]) {
			setError('Please select a date range');
			return;
		}

		setError(null);
		setSuccess(null);

		if (!token) {
			setError('No authentication token found. Please log in.');
			return;
		}

		const bookingDetails = {
			dateFrom: dateRange[0],
			dateTo: dateRange[1],
			guests: data.guests,
			venueId,
		};

		try {
			const response = await createBooking(token, bookingDetails, existingBookings);
			if (response.success) {
				setSuccess(response.message);
				setDateRange([null, null]); // Clear selected dates
				const updatedBookings = await fetchVenueBookings(venueId); // Fetch updated bookings
				setExistingBookings(updatedBookings);
				const dates = updatedBookings.map((booking) => ({
					start: new Date(booking.dateFrom),
					end: new Date(booking.dateTo),
				}));
				setAvailableDates(dates); // Update available dates
			} else {
				setError(response.message);
			}
		} catch (error) {
			setError(error.message || 'An error occurred during the booking process.');
		}
	};

	const handleDateSelect = (start, end) => {
		setDateRange([start, end]);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<BookingContainer>
				<BookingFormGroup>
					<BookingLabel htmlFor='guests'>Number of guests:</BookingLabel>
					<Controller name='guests' control={control} defaultValue={1} render={({ field }) => <BookingInput type='number' id='guests' {...field} min='1' max={maxGuests} />} />
					{errors.guests && <SuccessAndError>{errors.guests.message}</SuccessAndError>}
				</BookingFormGroup>
				<BookingCalendar availableDates={availableDates} onDateSelect={handleDateSelect} />
				<AddBookingButton type='submit'>{currentUser ? 'Book Venue' : 'Sign in to Book'}</AddBookingButton>
			</BookingContainer>
			{error && <SuccessAndError>{error}</SuccessAndError>}
			{success && <SuccessAndError style={{ color: 'green' }}>{success}</SuccessAndError>}
		</form>
	);
};

BookingForm.propTypes = {
	venueId: PropTypes.string.isRequired,
	maxGuests: PropTypes.number.isRequired,
};

export default BookingForm;
