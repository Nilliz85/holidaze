import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarContainer } from './calendar.styles';

const BookingCalendar = ({ availableDates, onDateSelect }) => {
	const [dateRange, setDateRange] = useState([null, null]);

	const handleDateChange = (value) => {
		if (!dateRange[0] || dateRange[1]) {
			setDateRange([value, null]);
		} else {
			const start = dateRange[0] < value ? dateRange[0] : value;
			const end = dateRange[0] < value ? value : dateRange[0];
			setDateRange([start, end]);
			onDateSelect(start, end);
		}
	};

	const tileDisabled = ({ date, view }) => {
		if (view === 'month') {
			const checkDate = new Date(date.setHours(0, 0, 0, 0));

			return availableDates.some(({ start, end }) => {
				const startDate = new Date(start);
				const endDate = new Date(end);

				return checkDate >= startDate && checkDate <= endDate;
			});
		}
	};

	return (
		<CalendarContainer>
			<Calendar onChange={handleDateChange} value={dateRange[0]} tileDisabled={tileDisabled} />
		</CalendarContainer>
	);
};

export default BookingCalendar;
