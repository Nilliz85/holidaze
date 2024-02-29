import React, { useState, useEffect, useContext } from 'react';
import { API_BASE_URL, ENDPOINTS, HEADERS } from '../../utils/api/api-config';
import { CartContext } from '../../contexts/cart.context';
import { useParams } from 'react-router-dom';
import StarRating from '../../components/rating/star-rating.component';
import BookingCalendar from '../../components/calender/calendar.component';
import { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import {
	VenueDetailPageContainer,
	VenueDetailContainer,
	VenueTitle,
	VenueImage,
	VenueDescription,
	PriceContainer,
	PriceLabel,
	VenuePrice,
	// PriceBox,
	// DiscountedPrice,
	// OriginalPrice,
	VenueRating,
	// VenueReviews,
	Review,
	AddBookingButton,
	VenueCardFooter,
} from './venuedetails.styles';
import BookingForm from '../../utils/api/bookings/booking-form';

const VenueDetail = () => {
	const { venueId } = useParams();
	const [venue, setVenue] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);
	const defaultImageUrl = require('../../assets/venue-placeholder.png');
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [availableDates, setAvailableDates] = useState([]);
	const [error, setError] = useState(null);

	const fetchVenue = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${API_BASE_URL}${ENDPOINTS.venues.byId(venueId)}`, {
				method: 'GET',
				headers: HEADERS(),
			});
			if (!response.ok) throw new Error('Venue not found');
			const data = await response.json();
			setVenue(data);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const fetchVenueDetailsAndAvailableDates = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(`${API_BASE_URL}${ENDPOINTS.venues.bookingsByVenue(venueId)}`, {
				method: 'GET',
				headers: HEADERS(),
			});
			if (!response.ok) throw new Error('Failed to fetch venue details');

			const data = await response.json();
			setVenue(data);

			const dates = data.bookings.map((booking) => ({
				start: booking.dateFrom,
				end: booking.dateTo,
			}));
			setAvailableDates(dates);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchVenue();
		fetchVenueDetailsAndAvailableDates();
	}, [venueId]);

	const getImageUrl = () => {
		if (venue && venue.media && venue.media.length > 0) {
			return venue.media[currentImageIndex];
		}
		return defaultImageUrl;
	};

	const handleDateSelect = (startDate, endDate) => {
		setFromDate(startDate);
		setToDate(endDate);
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!venue) return <div>No venue found</div>;

	const maxGuests = venue.maxGuests;
	const price = venue.price;

	return (
		<VenueDetailPageContainer>
			<VenueDetailContainer>
				<VenueTitle>{venue.name}</VenueTitle>
				<VenueRating>
					Rating: <StarRating rating={venue.rating} />
				</VenueRating>
				<VenueImage src={getImageUrl()} alt={venue.name} />
				<VenueCardFooter>
					<PriceContainer>
						<PriceLabel>Price:</PriceLabel>
						<VenuePrice>${price}</VenuePrice>
					</PriceContainer>
					<VenueDescription>{venue.description}</VenueDescription>
				</VenueCardFooter>
			</VenueDetailContainer>
			<BookingCalendar availableDates={availableDates} onDateSelect={handleDateSelect} />
			<BookingForm venueId={venueId} maxGuests={maxGuests} fromDate={fromDate} toDate={toDate} />
		</VenueDetailPageContainer>
	);
};

export default VenueDetail;
