import React, { useState, useEffect, useContext, Fragment } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../utils/api/api';
import { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import {
	ProductDetailPageContainer,
	ProductDetailContainer,
	ProductTitle,
	ProductImage,
	ProductDescription,
	PriceContainer,
	PriceLabel,
	PriceBox,
	DiscountedPrice,
	OriginalPrice,
	ProductTags,
	ProductRating,
	ProductReviews,
	Review,
	AddToCartButton,
	ProductCardFooter,
} from './productdetails.styles';

const StarRating = ({ rating }) => {
	const fullStar = '★';
	const emptyStar = '☆';
	let stars = [];

	// Add full stars
	for (let i = 0; i < Math.floor(rating); i++) {
		stars.push(<span key={`full_${i}`}>{fullStar}</span>);
	}

	// Add half star
	if (rating % 1 !== 0) {
		stars.push(<span key={`half`}>½</span>);
	}

	// Add empty stars
	for (let i = stars.length; i < 5; i++) {
		stars.push(<span key={`empty_${i}`}>{emptyStar}</span>);
	}

	return <div>{stars}</div>;
};

const ProductDetail = () => {
	const { addItemToCart } = useContext(CartContext);
	const addProductToCart = () => addItemToCart(product);
	const { productId } = useParams();
	const [product, setProduct] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProduct = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(`${API_URL}/${productId}`);
				if (!response.ok) throw new Error('Product not found');
				const data = await response.json();
				setProduct(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchProduct();
	}, [productId]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!product) return <div>No product found</div>;

	return (
		<ProductDetailPageContainer>
			<ProductDetailContainer>
				<ProductTitle>{product.title}</ProductTitle>
				<ProductRating>
					Rating: <StarRating rating={product.rating} />
				</ProductRating>
				<ProductImage src={product.imageUrl} alt={product.title} />
				<ProductCardFooter>
					<AddToCartButton buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
						ADD TO CART
					</AddToCartButton>
					<PriceContainer>
						<PriceLabel>Price:</PriceLabel>
						<PriceBox>
							{product.discountedPrice && product.discountedPrice < product.price && (
								<OriginalPrice>${(product.price / 100).toFixed(2)}</OriginalPrice>
							)}
							<DiscountedPrice>
								${product.discountedPrice ? (product.discountedPrice / 100).toFixed(2) : (product.price / 100).toFixed(2)}
							</DiscountedPrice>
						</PriceBox>
					</PriceContainer>
					<ProductDescription>{product.description}</ProductDescription>
					<ProductTags>Tags: {product.tags.join(', ')}</ProductTags>
				</ProductCardFooter>
			</ProductDetailContainer>
			<ProductReviews>
				<h3>Reviews:</h3>
				{product.reviews.map((review) => (
					<Review key={review.id}>
						<strong>{review.username}</strong> rated it {review.rating} stars
						<p>{review.description}</p>
					</Review>
				))}
			</ProductReviews>
		</ProductDetailPageContainer>
	);
};

export default ProductDetail;
