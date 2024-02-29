import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import StarRating from '../rating/star-rating.component';
import { VenueCard, VenueImage, ImgNavButton, PreviousImgButton, NextImgButton, VenueContent, VenueName, PriceRating, VenuePrice, VenueRating, RatingText } from './directory-item.styles';

export const IMG_BUTTON_TYPE_CLASSES = {
	base: 'img-nav-button',
	previous: 'previous-img-button',
	next: 'next-img-button',
};

const getImgNavButton = (buttonType = IMG_BUTTON_TYPE_CLASSES.base) =>
	({
		[IMG_BUTTON_TYPE_CLASSES.base]: ImgNavButton,
		[IMG_BUTTON_TYPE_CLASSES.previous]: PreviousImgButton,
		[IMG_BUTTON_TYPE_CLASSES.next]: NextImgButton,
	}[buttonType] || ImgNavButton);

const ImgNavButtonComponent = ({ children, buttonType, ...otherProps }) => {
	const CustomImgNavButton = getImgNavButton(buttonType);

	return <CustomImgNavButton {...otherProps}>{children}</CustomImgNavButton>;
};

const DirectoryItem = ({ venue }) => {
	const { id, name, media, price, rating } = venue;
	const defaultImageUrl = require('../../assets/venue-placeholder.png');
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const getImageUrl = (mediaArray) => {
		if (mediaArray.length > 0) {
			return mediaArray[currentImageIndex];
		}
		return defaultImageUrl;
	};

	const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

	const handleNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % media.length);
	};

	const handlePrevImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
	};

	return (
		<Link to={`/venues/${id}`}>
			{' '}
			{/* Wrap the entire DirectoryItem with Link component */}
			<VenueCard>
				<VenueImage src={getImageUrl(media)} alt={capitalizeFirstLetter(name)} />
				{media.length > 1 && (
					<>
						<ImgNavButtonComponent onClick={handlePrevImage} buttonType={IMG_BUTTON_TYPE_CLASSES.previous}>
							{'<'}
						</ImgNavButtonComponent>
						<ImgNavButtonComponent onClick={handleNextImage} buttonType={IMG_BUTTON_TYPE_CLASSES.next}>
							{'>'}
						</ImgNavButtonComponent>
					</>
				)}
				<VenueContent>
					<VenueName>{capitalizeFirstLetter(name)}</VenueName>
					<PriceRating>
						<VenuePrice>Price: ${price}</VenuePrice>
						<VenueRating>
							<RatingText>Rating:</RatingText>
							<StarRating rating={rating} />
						</VenueRating>
					</PriceRating>
				</VenueContent>
			</VenueCard>
		</Link>
	);
};

export default DirectoryItem;
