import React, { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarContainer } from './calendar.styles';

const BookingCalendar = ({ availableDates = [], onDateSelect }) => {
	const [checkInDate, setCheckInDate] = useState(null);
	const [checkOutDate, setCheckOutDate] = useState(null);
	const [dateRange, setDateRange] = useState([null, null]);
	const calendarRef = useRef();

	useEffect(() => {
		// Reset selected dates when available dates are updated
		setCheckInDate(null);
		setCheckOutDate(null);
		setDateRange([null, null]);
	}, [availableDates]);

	const handleDateChange = (value) => {
		const today = new Date();
		today.setHours(0, 0, 0, 0); // Reset time to midnight for comparison

		if (Array.isArray(value)) {
			// Handle selecting a range
			const [start, end] = value;
			if (start < today) {
				alert('You cannot book a venue for past dates.');
				resetDates();
				return;
			}
			if (end && end < start) {
				alert('Check-out date must be after the check-in date.');
				setDateRange([start, null]);
				setCheckOutDate(null);
				return;
			}
			setDateRange([start, end]);
			setCheckInDate(start);
			setCheckOutDate(end);
			onDateSelect(start, end);
		} else {
			// Handle selecting a single date
			if (!checkInDate) {
				if (value < today) {
					alert('You cannot book a venue for past dates.');
					resetDates();
					return;
				}
				setCheckInDate(value);
				setDateRange([value, null]);
			} else if (value.getTime() === checkInDate.getTime()) {
				resetDates();
			} else {
				if (value <= checkInDate) {
					alert('Check-out date must be after the check-in date.');
					return;
				}
				const isOverlap = availableDates.some(({ start, end }) => {
					const startDate = new Date(start);
					const endDate = new Date(end);
					return checkInDate <= endDate && value >= startDate;
				});
				if (isOverlap) {
					alert('Some of the chosen dates are unavailable.');
					resetDates();
					return;
				}
				setCheckOutDate(value);
				setDateRange([checkInDate, value]);
				onDateSelect(checkInDate, value);
			}
		}
	};

	const resetDates = () => {
		setCheckInDate(null);
		setCheckOutDate(null);
		setDateRange([null, null]);
	};

	const tileDisabled = ({ date, view }) => {
		const today = new Date();
		today.setHours(0, 0, 0, 0); // Reset time to midnight for comparison

		if (view === 'month') {
			const checkDate = new Date(date.setHours(0, 0, 0, 0));
			if (checkDate < today) {
				return true; // Disable past dates
			}
			if (checkInDate && !checkOutDate) {
				if (checkDate < checkInDate) {
					return true; // Disable dates before the check-in date
				}
				const isBooked = availableDates.some(({ start, end }) => {
					const startDate = new Date(start);
					const endDate = new Date(end);
					return checkDate >= startDate && checkDate <= endDate;
				});
				if (isBooked) {
					return true; // Disable dates that are already booked
				}
			}
			const isBooked = availableDates.some(({ start, end }) => {
				const startDate = new Date(start);
				const endDate = new Date(end);
				return checkDate >= startDate && checkDate <= endDate;
			});
			if (isBooked) {
				return true; // Disable dates that are already booked
			}
		}
		return false;
	};

	const tileClassName = ({ date, view }) => {
		const checkDate = new Date(date.setHours(0, 0, 0, 0));
		if (view === 'month') {
			if (checkDate.getTime() === checkInDate?.getTime() || checkDate.getTime() === checkOutDate?.getTime()) {
				return 'react-calendar__tile--active';
			}
			if (checkInDate && checkOutDate && checkDate > checkInDate && checkDate < checkOutDate) {
				return 'react-calendar__tile--range';
			}
		}
		return null;
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (calendarRef.current && !calendarRef.current.contains(event.target)) {
				if (!checkOutDate) {
					resetDates();
				}
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [checkOutDate]);

	return (
		<CalendarContainer ref={calendarRef}>
			<Calendar onChange={handleDateChange} selectRange={false} value={dateRange} tileDisabled={tileDisabled} tileClassName={tileClassName} />
		</CalendarContainer>
	);
};

export default BookingCalendar;
