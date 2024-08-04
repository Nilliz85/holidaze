import React, { useState, useEffect } from 'react';
import { fetchVenues } from '../../../utils/api/venues/getVenues';
import placeholderImage from '../../../assets/placeholders/house-placeholder.png';
import StarRating from '../../rating/star-rating.component';
import {
	PopularVenuesSection,
	SectionHeader,
	PopularVenuesContainer,
	PopularVenueCard,
	PopularVenueImage,
	PopularVenueContent,
	PopularVenueName,
	PriceRating,
	PopularVenuePrice,
	PopularVenueRating,
	RatingText,
} from './popular-venues.styles'; // Import styled-components

const PopularVenuesComponent = () => {
	const [venues, setVenues] = useState([]);

	useEffect(() => {
		const getVenues = async () => {
			try {
				const data = await fetchVenues();

				const fiveStarVenues = data.filter((venue) => venue.rating === 5);
				const fourStarVenues = data.filter((venue) => venue.rating === 4);

				const uniqueNames = new Set();
				const uniqueMediaUrls = new Set();

				const addUniqueVenues = (venues) => {
					return venues.filter((venue) => {
						const isNameUnique = !uniqueNames.has(venue.name);
						const isMediaUrlUnique = venue.media.length > 0 && !uniqueMediaUrls.has(venue.media[0]);
						if (isNameUnique && isMediaUrlUnique) {
							uniqueNames.add(venue.name);
							uniqueMediaUrls.add(venue.media[0]);
							return true;
						}
						return false;
					});
				};
				const shuffledFiveStarVenues = fiveStarVenues.sort(() => 0.5 - Math.random());
				const shuffledFourStarVenues = fourStarVenues.sort(() => 0.5 - Math.random());

				let topRatedVenues = addUniqueVenues(shuffledFiveStarVenues, uniqueNames);
				if (topRatedVenues.length < 4) {
					const remainingVenues = addUniqueVenues(shuffledFourStarVenues, uniqueNames);
					topRatedVenues = topRatedVenues.concat(remainingVenues);
				}

				setVenues(topRatedVenues.slice(0, 4));
			} catch (error) {
				console.error(error);
			}
		};

		getVenues();
	}, []);

	const getImageUrl = (mediaArray) => {
		if (mediaArray.length > 0) {
			return mediaArray[0];
		}
		return placeholderImage;
	};

	return (
		<PopularVenuesSection>
			<SectionHeader>Popular Venues</SectionHeader>
			<PopularVenuesContainer>
				{venues.map((venue) => (
					<PopularVenueCard key={venue.id}>
						<PopularVenueImage src={getImageUrl(venue.media)} alt={venue.name} />
						<PopularVenueContent>
							<PopularVenueName>{venue.name}</PopularVenueName>
							<PriceRating>
								<PopularVenuePrice>Price: ${venue.price}</PopularVenuePrice>
								<PopularVenueRating>
									<RatingText>Rating:</RatingText>
									{StarRating(venue.rating)}
								</PopularVenueRating>
							</PriceRating>
						</PopularVenueContent>
					</PopularVenueCard>
				))}
			</PopularVenuesContainer>
		</PopularVenuesSection>
	);
};

export default PopularVenuesComponent;
