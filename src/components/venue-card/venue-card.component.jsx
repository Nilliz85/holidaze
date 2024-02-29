import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
	VenuePageContainer,
	VenueCardContainer,
	VenueImage,
	AddToCartButton,
	VenueCardFooter,
	VenueTitle,
	PriceContainer,
	OriginalPrice,
	DiscountedPrice,
	PriceLabel,
	PriceBox,
	TagsContainer,
	onSearchChange,
	searchPlaceholder,
} from './venue-card.styles';

const VenueCard = ({ venue }) => {
	const { id, title, price, media, rating, discountedPrice } = venue;
	const defaultImageUrl = require('../../assets/venue-placeholder.png');
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const navigate = useNavigate();
	const { addItemToCart } = useContext(CartContext);
	const addVenueToCart = () => addItemToCart(venue);

	const navigateToVenueDetail = () => {
		navigate(`/venues/${id}`);
	};

	const getImageUrl = (mediaArray) => {
		if (mediaArray.length > 0) {
			return mediaArray[currentImageIndex];
		}
		return defaultImageUrl;
	};

	return (
		<VenuePageContainer>
			<VenueCardContainer>
				<VenueImage src={getImageUrl(media)} alt={title} onClick={navigateToVenueDetail} />
				<VenueCardFooter onClick={navigateToVenueDetail}>
					<VenueTitle>{title}</VenueTitle>
					<PriceContainer>
						<PriceLabel>Price:</PriceLabel>
						<PriceBox>{price}</PriceBox>
					</PriceContainer>
					<PriceContainer>
						<PriceLabel>Rating:</PriceLabel>
						<PriceBox>{rating}</PriceBox>
					</PriceContainer>
				</VenueCardFooter>
				<AddToCartButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addVenueToCart}>
					ADD TO CART
				</AddToCartButton>
			</VenueCardContainer>
		</VenuePageContainer>
	);
};

export default VenueCard;
