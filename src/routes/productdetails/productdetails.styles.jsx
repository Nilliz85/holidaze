import styled from 'styled-components';
import Button from '../../components/button/button.component';

export const ProductDetailPageContainer = styled.div`
	text-align: center;
	font-size: xx-large;
	margin-bottom: 300px;
`;

export const ProductDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	width: 45%;
	height: 1400px;
	align-items: center;
	position: relative;
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
	margin-bottom: 100px;

	button {
		opacity: 0.85;
		display: flex;
	}
`;

export const ProductTitle = styled.h1`
	font-size: xxx-large;
	width: 50%;
	text-align: center;
`;

export const ProductImage = styled.img`
	width: 80%;
	height: 95%;
	object-fit: cover;
	margin-bottom: 30px;
	overflow: hidden;
`;

export const ProductDescription = styled.p`
	font-size: x-large;
`;

export const ProductPrice = styled.p`
	width: 25%;
`;

export const OriginalPrice = styled.span`
	text-decoration: line-through;
	color: #767676;
`;

export const DiscountedPrice = styled(ProductPrice)`
	color: #ff0000;
	font-weight: bold;
`;

export const ProductCardFooter = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 400px;
	justify-content: space-between;
	text-align: center;
	align-items: center;
	font-size: xx-large;
	padding: 20px;
	margin-bottom: 30px;
`;

export const ProductTags = styled.div`
	font-size: 20px;
	color: grey;
	font-style: italic;
	text-align: left;
	position: absolute;
	bottom: 5px;
	left: 5px;
`;

export const ProductRating = styled.div`
	font-size: 20px;
	text-align: center;
`;

export const ProductReviews = styled.div``;

export const Review = styled.div``;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	align-items: center;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const PriceLabel = styled.span``;

export const PriceBox = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
`;

export const AddToCartButton = styled(Button)`
	width: 60%;
	height: 100px;
	opacity: 0.8;
	position: absolute;
	top: calc(74% - 25px);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		opacity: 0.85;
		cursor: pointer;
	}
`;
