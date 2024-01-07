import React, { Fragment, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import SearchBox from '../search-boox/search-box.component';
import {
	ProductPageContainer,
	ProductCardContainer,
	ProductImage,
	AddToCartButton,
	ProductCardFooter,
	ProductTitle,
	PriceContainer,
	OriginalPrice,
	DiscountedPrice,
	PriceLabel,
	PriceBox,
	TagsContainer,
	onSearchChange,
	searchPlaceholder,
} from './product-card.styles';

const ProductCard = ({ product }) => {
	const { id, title, price, imageUrl, discountedPrice } = product;
	const navigate = useNavigate();
	const { addItemToCart } = useContext(CartContext);
	const addProductToCart = () => addItemToCart(product);
	const formattedTags = product.tags.length > 3 ? `${product.tags.slice(0, 3).join(', ')}...` : product.tags.join(', ');

	const navigateToProductDetail = () => {
		navigate(`/products/${id}`);
	};

	return (
		<ProductPageContainer>
			<ProductCardContainer>
				<ProductImage src={imageUrl} alt={title} onClick={navigateToProductDetail} />
				<ProductCardFooter onClick={navigateToProductDetail}>
					<ProductTitle>{title}</ProductTitle>
					<PriceContainer>
						<PriceLabel>Price:</PriceLabel>
						<PriceBox>
							{discountedPrice < price && <OriginalPrice>${(price / 100).toFixed(2)}</OriginalPrice>}
							<DiscountedPrice>${(discountedPrice / 100).toFixed(2)}</DiscountedPrice>
						</PriceBox>
					</PriceContainer>
					<TagsContainer>Tags: {formattedTags}</TagsContainer>
				</ProductCardFooter>
				<AddToCartButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
					ADD TO CART
				</AddToCartButton>
			</ProductCardContainer>
		</ProductPageContainer>
	);
};

export default ProductCard;
