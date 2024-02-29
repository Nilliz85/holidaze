import React, { useState, useEffect } from 'react';
import { VenueCard } from '../venue-card/venue-card.component';
import { VenuePreviewContainer } from './venues-preview.styles';
import { fetchVenues } from '../../utils/api/api';

const VenuePreview = () => {
	const [venues, setVenues] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const initFetch = async () => {
			try {
				const venuesData = await fetchVenues();
				setVenues(venuesData);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		initFetch();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<VenuePreviewContainer>
			{venues.map((venue) => (
				<VenueCard key={venue.id} venue={venue} />
			))}
		</VenuePreviewContainer>
	);
};

export default VenuePreview;
