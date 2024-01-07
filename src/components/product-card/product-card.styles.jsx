import styled from 'styled-components';
import Button from '../button/button.component';

export const ProductPageContainer = styled.div``;

export const ProductCardContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 700px;
	align-items: center;
	position: relative;
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 20px 20px rgba(0, 0, 0, 0.3);

		img {
			opacity: 0.8;
		}

		button {
			opacity: 0.85;
			display: flex;
		}
	}
`;

export const ProductImage = styled.img`
	width: 100%;
	height: 95%;
	object-fit: cover;
	margin-bottom: 10px;
	overflow: hidden;
`;

export const AddToCartButton = styled(Button)`
	width: 50%;
	height: 60px;
	opacity: 0.8;
	position: absolute;
	top: calc(70% - 25px);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		opacity: 0.85;
	}
`;

export const ProductTitle = styled.h2`
	font-size: x-large;
	width: 50%;
`;

export const ProductPrice = styled.span`
	width: 5%;
`;

export const OriginalPrice = styled.span`
	text-decoration: line-through;
	color: #767676;
`;

export const DiscountedPrice = styled.span`
	color: #ff0000;
	font-weight: bold;
`;

export const ProductCardFooter = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
	text-align: center;
	align-items: center;
	font-size: 30px;
	padding: 20px;
	margin-bottom: 30px;
`;

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

export const TagsContainer = styled.div`
	font-size: 20px;
	color: grey;
	font-style: italic;
	text-align: left;
	position: absolute;
	bottom: 5px;
	left: 5px;
`;

export const onSearchChange = styled.div`
	font-size: 18px;
`;
export const searchPlaceholder = styled.div`
	font-size: 20px;
	color: grey;
	font-style: italic;
	text-align: left;
	position: absolute;
	bottom: 5px;
	left: 5px;
`;
